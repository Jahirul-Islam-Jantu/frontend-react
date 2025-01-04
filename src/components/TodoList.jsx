const TodoList = () => {
    return (
        <div className="flex justify-center align-middle m-20">
              <div className="custom-todo">
                  <h1>Todo List App</h1>
                 <input type="text" placeholder="Add Todo..." id="todo-input"/>
                 <button>add Item</button>
                  <div className="show-Todo">
                       <ul>
                           <li> Hello Todo</li>
                           <li> Hello Todo</li>
                       </ul>
                  </div>
             </div>
        </div>
    );
};

export default TodoList;