import {useEffect, useState} from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState(null);
    useEffect( () => {
        (async()=>{
            await callData()
        })()
    }, []);
    const callData = async ()=>{
        let URL = "https://dummyjson.com/products"
        let res = await axios.get(URL);
        let data = res.data.products;
        setProducts(data);
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-5xl text-emerald-800 text-center mb-10">Products</h1>
                <div className="flex justify-evenly align-items-center flex-wrap gap-3 p-4 ">
                    {products != null?(products.map((item) => {
                        return (
                            <div className="card bg-blue-50 hover:bg-gray-300 w-96 shadow-xl" key={item.id}>
                                <div className="card-body">
                                    <img src={item['images']} alt=""/>
                                    <h2 className="card-title">{item['title']}</h2>
                                    <p className=""> {item['description']} </p>
                                    <p> {item['category']} </p>
                                    <p>{item['price']}</p>
                                </div>
                            </div>
                        )
                    })): (
                        <div className="flex w-52 flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-32 w-full"></div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Products;