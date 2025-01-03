import Button from "./Button.jsx";
import { useState } from "react";

const InputForms = ({ onAddTodo }) => {
    const [value, setValue] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onAddTodo(value);
            setValue(''); // Clear input after adding
        }
    };

    return (
        <div className="flex justify-center items-center w-auto gap-3 flex-col">
            <input
                type="text"
                placeholder="Add Your Item"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4"
            />
            <Button title="Add Item" onClick={addTodo} />
        </div>
    );
};

export default InputForms;







// import Button from "./Button.jsx";
// import {useState} from "react";
//
// const InputForms = ({handlevalue}) => {
//     const [value, setValue] = useState('');
//     handlevalue && setValue(value);
//     const addTodo = (e) => {
//         e.preventDefault();
//         let item = document.getElementById("addItem")
//         let values = item.value
//         setValue(values)
//
//     }
//
//     return (
//         <div>
//             <input type="text" placeholder="Add Your Item" id="addItem" />
//             <Button title="Add Item" onClick={addTodo}/>
//
//
//         </div>
//     );
// };
//
// export default InputForms;