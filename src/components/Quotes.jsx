import {useEffect, useState} from "react";
import axios from "axios";

const Quotes = () => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        (async ()=>{
            await callAPI()
        })()
    }, []);

    const callAPI = async () => {
        let URL = "https://dummyjson.com/quotes"
        let res = await axios.get(URL);
        let data = res.data;
        setItem(data.quotes)
    }


    return (
        <section className="mt-40">
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-5xl text-emerald-800 text-center mb-10"> Our Gallery </h1>
                    <div className="flex justify-evenly align-items-center flex-wrap gap-3 p-4 ">
                        {item != null?(
                            item.map((i) => {
                                return (
                                    <div className="card bg-blue-50 hover:bg-gray-300 w-96 shadow-xl" key={i.id}>
                                        <div className="card-body">
                                            <h2 className="card-title">{i['author']}</h2>
                                            <p className=""> {i['quote']} </p>

                                        </div>
                                    </div>
                                )
                            })
                        ):(<div className="flex w-52 flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-32 w-full"></div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;