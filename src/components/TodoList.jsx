import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
    const [item, setItem] = useState("");
    const [todos, setTodos] = useState([]);

    // Fetch tasks from the backend
    useEffect(() => {
        axios.get("http://localhost:5000/getTodos").then((response) => {
            setTodos(response.data);
        });
    }, []);

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim()) {
            const newItem = {
                text: item,
                isDone: false,
            };
            axios.post("http://localhost:5000/setTodos", newItem).then((response) => {
                setTodos([...todos, response.data]);
                setItem("");
            });
        }
    };

    const handleDone = (id) => {
        const task = todos.find((todo) => todo._id === id);
        axios.put(`http://localhost:5000/updateTodos/${id}`, { ...task, isDone: !task.isDone }).then((response) => {
            setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
        });
    };

    const handleDelete = (id) => {
        const isConfirmed = confirm("Are you sure you want to delete this task?");
        if (isConfirmed) {
            axios.delete(`http://localhost:5000/deleteTodos/${id}`).then(() => {
                setTodos(todos.filter((todo) => todo._id !== id));
            });
        }
    };

    return (
        <div className="flex justify-center align-middle m-20">
            <div className="custom-todo">
                <h1>Todo List App</h1>
                <input
                    id="inputElement"
                    type="text"
                    placeholder="Add Todo..."
                    value={item}
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
