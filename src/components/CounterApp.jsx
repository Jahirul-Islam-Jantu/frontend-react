import {useState} from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

     const IncrementCounter = ()=>setCount(count + 1);
     const DecrementCounter = ()=> {
         count >= 1 && setCount(count - 1);
     }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex justify-center flex-col align-items-center w-auto gap-3 p-4 ">
                                    <h1 className="text-center text-pink-400 text-6xl"> {count}  </h1>
                                    <button onClick={IncrementCounter} className="btn btn-outline btn-accent">Increment</button>
                                    <button onClick={DecrementCounter} className="btn btn-outline btn-accent">Decrement</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterApp;