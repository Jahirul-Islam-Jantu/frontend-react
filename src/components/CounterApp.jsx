import {useState} from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

     const IncrementCounter = ()=>setCount(count + 1);
     const DecrementCounter = ()=> {
         count >= 1 && setCount(count - 1);
     }

    return (
        <div className="flex justify-center align-center ">
            <div className="container-fluid">
                <div className="row">
                    <div className="card glass m-20">
                        <figure>
                            <img
                                src="tasbihBG.jpeg"
                                alt="car!"/>
                        </figure>
                        <div className="card-body bg-amber-50">
                            <h2 className="card-title text-center text-pink-400 text-3xl card-title">Let's Count {count}</h2>
                            <p className="text-pink-800">You Can count your Tasbih here!</p>
                            <div className="card-actions justify-content-center align-items-center">
                                <button onClick={IncrementCounter} className="btn btn-outline btn-accent ">Increment
                                </button>
                                <button onClick={DecrementCounter} className="btn btn-outline btn-accent ">Decrement
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*<div className="card">*/}
                    {/*    <div className="card-body">*/}
                    {/*        <h1 className="text-center text-pink-400 text-6xl card-title"> {count}  </h1>*/}
                    {/*        <button onClick={IncrementCounter} className="btn btn-outline btn-accent ">Increment*/}
                    {/*        </button>*/}
                    {/*        <button onClick={DecrementCounter} className="btn btn-outline btn-accent ">Decrement*/}
                    {/*        </button>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default CounterApp;