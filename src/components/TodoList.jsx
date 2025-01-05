import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
    const [item, setItem] = useState({ text: "", title: "", description: "", date: "" });
    const [todos, setTodos] = useState([]);

    // Fetch tasks from the backend or local storage
    useEffect(() => {
        axios.get("http://localhost:5000/getTodos")
            .then((response) => {
                setTodos(response.data);
                // Save to localStorage in case MongoDB data is fetched
                localStorage.setItem('todos', JSON.stringify(response.data));
            })
            .catch(() => {
                // Fallback to localStorage if API call fails
                const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
                setTodos(storedTodos);
            });
    }, []);

    // Handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    // Submit new todo
    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.text.trim()) {
            const newItem = {
                ...item,
                isDone: false,
            };
            axios.post("http://localhost:5000/setTodos", newItem)
                .then((response) => {
                    setTodos([...todos, response.data]);
                    localStorage.setItem('todos', JSON.stringify([...todos, response.data]));
                    setItem({ text: "", title: "", description: "", date: "" });
                })
                .catch(() => {
                    // Save to localStorage if MongoDB is not available
                    const updatedTodos = [...todos, newItem];
                    setTodos(updatedTodos);
                    localStorage.setItem('todos', JSON.stringify(updatedTodos));
                    setItem({ text: "", title: "", description: "", date: "" });
                });
        }
    };

    // Handle marking a task as done
    const handleDone = (id) => {
        const task = todos.find((todo) => todo._id === id);
        axios.put(`http://localhost:5000/updateTodos/${id}`, { ...task, isDone: !task.isDone })
            .then((response) => {
                const updatedTodos = todos.map((todo) => (todo._id === id ? response.data : todo));
                setTodos(updatedTodos);
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            })
            .catch(() => {
                // Update in localStorage if MongoDB update fails
                const updatedTodos = todos.map((todo) => (todo._id === id ? { ...todo, isDone: !todo.isDone } : todo));
                setTodos(updatedTodos);
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            });
    };

    // Handle updating a task
    const handleUpdate = (id) => {
        const taskToUpdate = todos.find((todo) => todo._id === id);
        const newText = prompt("Update the task text:", taskToUpdate.text);

        if (newText !== null) {
            const updatedTask = { ...taskToUpdate, text: newText };
            axios.put(`http://localhost:5000/updateTodos/${id}`, updatedTask)
                .then((response) => {
                    const updatedTodos = todos.map((todo) => (todo._id === id ? response.data : todo));
                    setTodos(updatedTodos);
                    localStorage.setItem('todos', JSON.stringify(updatedTodos));
                })
                .catch(() => {
                    // Update in localStorage if MongoDB update fails
                    const updatedTodos = todos.map((todo) => (todo._id === id ? updatedTask : todo));
                    setTodos(updatedTodos);
                    localStorage.setItem('todos', JSON.stringify(updatedTodos));
                });
        }
    };

    // Handle deleting a task
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteTodos/${id}`)
            .then(() => {
                const updatedTodos = todos.filter((todo) => todo._id !== id);
                setTodos(updatedTodos);
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            })
            .catch(() => {
                // Delete from localStorage if MongoDB delete fails
                const updatedTodos = todos.filter((todo) => todo._id !== id);
                setTodos(updatedTodos);
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            });
    };

    // Calculate the remaining time for the task
    const calculateTimeRemaining = (date) => {
        const difference = new Date(date) - new Date();
        const hours = Math.floor(difference / 3600000);
        const minutes = Math.floor((difference % 3600000) / 60000);
        return `${hours}h ${minutes}m remaining`;
    };

    return (
        <div className="flex justify-center align-middle m-20">
            <div className="custom-todo">
                <h1>Todo List App</h1>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={handleChange}
                />
                <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={handleChange}
                />
                <input
                    name="date"
                    type="datetime-local"
                    value={item.date}
                    onChange={handleChange}
                />
                <input
                    name="text"
                    type="text"
                    placeholder="Add Todo..."
                    value={item.text}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                />
                <button onClick={handleSubmit}>Add Item</button>
                <div className="show-Todo">
                    <ul>
                        {todos.length > 0 ? (
                            todos.map((todo, index) => (
                                <li
                                    key={todo._id}
                                    className="todo-item flex justify-between align-items-center mb-2 gap-3"
                                    style={{ cursor: "pointer", color: todo.isDone ? "cadetblue" : "burlywood" }}
                                >
                                    <div
                                        className="flex gap-3"
                                        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
                                        onClick={() => handleDone(todo._id)}
                                    >
                                        <span>{index + 1}</span>
                                        <img src={todo.isDone ? "ok.png" : "notok.png"} alt="" width="25px" />
                                        <span className="todo-text">{todo.text}</span>
                                    </div>
                                    <div>
                                        <p><strong>Title:</strong> {todo.title}</p>
                                        <p><strong>Description:</strong> {todo.description}</p>
                                        <p><strong>Due:</strong> {calculateTimeRemaining(todo.date)}</p>
                                    </div>
                                    <button className="delete-button" onClick={() => handleUpdate(todo._id)}>
                                        Update
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(todo._id)}>
                                        <img src="itemDelete.png" width="25px" alt="" />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <strong>No Todos....</strong>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;




// import { useEffect, useState } from "react";
//
// const TodoList = () => {
//     const [item, setItem] = useState(""); // to handle todo items
//     const [todos, setTodos] = useState([]); // to handle all todos
//
//     // Load todos from localStorage on component mount
//     useEffect(() => {
//         const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//         setTodos(storedTodos);
//     }, []);
//
//     // Save todos to localStorage whenever todos change
//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);
//
//     const handleChange = (e) => {
//         setItem(e.target.value);
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (item.trim()) {
//             const newItem = {
//                 id: Date.now(),
//                 text: item,
//                 isDone: false,
//             };
//             setTodos([...todos, newItem]);
//             setItem("");
//         }
//     };
//
//     const handleDone = (id) => {
//         setTodos(todos.map((todo) =>
//             todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
//         ));
//     };
//
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleSubmit(e);
//         }
//     };
//     const handleDelete = (id) => {
//             const updatedTodos = todos.filter((item) => item.id !== id);
//             setTodos(updatedTodos);
//             localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save the updated list to localStorage
//
//             // Refocus on the input field
//             document.querySelector('#inputElement').focus();
//     };
//
//
//     return (
//         <div className="flex justify-center align-middle m-20">
//             <div className="custom-todo">
//                 <h1>Todo List App</h1>
//                 <input
//                     id="inputElement"
//                     type="text"
//                     placeholder="Add Todo..."
//                     value={item}
//                     onChange={handleChange}
//                     onKeyDown={handleKeyDown}
//                 />
//                 <button onClick={handleSubmit}>Add Item</button>
//                 <div className="show-Todo">
//                     <ul>
//                         {todos.length > 0 ? (
//                             todos.map((todo, index) => (
//                                 <li
//                                     className="todo-item flex justify-between align-items-center mb-2 gap-3"
//                                     key={todo.id}
//                                     style={{
//                                         cursor: "pointer",
//                                         color: todo.isDone ? "cadetblue" : "burlywood",
//                                     }}
//                                 >
//                                     <div className="flex gap-3" style={{textDecoration: todo.isDone ? "line-through" : "none",}} onClick={() => handleDone(todo.id)}>
//                                     <span>{index+1}</span>
//                                     <img
//                                         src={todo.isDone ? "ok.png" : "notok.png"}
//                                         alt=""
//                                         width="25px"
//                                     />
//                                     <span className="todo-text">{todo.text}</span>
//                                     </div>
//                                     <button className="delete-button" onClick={()=>handleDelete(todo.id)}><img src="itemDelete.png" width="25px" alt=""/></button>
//                                 </li>
//                             ))
//                         ) : (
//                             <strong>No Todos....</strong>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TodoList;
