import { useEffect, useState } from "react";

const TodoList = () => {
    const [item, setItem] = useState(""); // to handle todo items
    const [todos, setTodos] = useState([]); // to handle all todos

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim()) {
            const newItem = {
                id: Date.now(),
                text: item,
                isDone: false,
            };
            setTodos([...todos, newItem]);
            setItem("");
        }
    };

    const handleDone = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    const handleDelete = (e) => {
        e.preventDefault();

    }

    return (
        <div className="flex justify-center align-middle m-20">
            <div className="custom-todo">
                <h1>Todo List App</h1>
                <input
                    type="text"
                    placeholder="Add Todo..."
                    value={item}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSubmit}>Add Item</button>
                <div className="show-Todo">
                    <ul>
                        {todos.length > 0 ? (
                            todos.map((todo, index) => (
                                <li
                                    className="flex justify-between align-items-center mb-2 gap-3"
                                    key={todo.id}
                                    onClick={() => handleDone(todo.id)}
                                    style={{
                                        cursor: "pointer",
                                        textDecoration: todo.isDone ? "line-through" : "none",
                                        color: todo.isDone ? "cadetblue" : "burlywood",
                                    }}
                                >
                                    <p>{index+1}</p>
                                    <img
                                        src={todo.isDone ? "ok.png" : "notok.png"}
                                        alt=""
                                        width="25px"
                                    />
                                    <p> {todo.text}</p>
                                    <button className="delete-button"><img src="itemDelete.png" width="25px" onClick={()=>{}} alt=""/></button>
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
