import InputForms from "./InputForms.jsx";
import { useState } from "react";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
        }
    };

    return (
        <div className=" card-body flex justify-center items-center w-auto" >
            <InputForms onAddTodo={addTodo} />
            <div className="container-fluid">
                <div className="row">
                    <div className="card glass bg-amber-950  min-w-56 w-auto p-2 text-center text-pink-900 gap-2 ">
                            {todos.length > 0 ? (todos.map((item, index) => ( <ul>
                                <li className="flex flex-col justify-center align-middle border p-2 rounded-2xl bg-amber-200 bg-opacity-40 " key={index}>{item}</li> </ul>
                            ))):(<p> No Todos Added! </p>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;








// import InputForms from "./InputForms.jsx";
// import {useState} from "react";
//
// const TodoApp = () => {
//
//     const handleValue = (value)=>{
//         return value;
//     }
//
//     const [todos, setTodos] = useState([]);
//
//     return (
//         <div>
//             <InputForms handlevalue={handleValue}/>
//
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <ul>
//                             <li>{value.map((item)=>item)}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TodoApp;