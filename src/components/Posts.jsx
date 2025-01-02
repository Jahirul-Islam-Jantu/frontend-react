import { useRef, useState } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const URL = "https://dummyjson.com/posts";
            let response = await axios.get(URL);
            setPosts(response.data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-center text-5xl text-emerald-800">Posts</h1>
            <button className="btn btn-outline btn-secondary flex align-middle" onClick={fetchPosts}>
                Call Data
            </button>

            <div className="container">
                <div className="row flex justify-between align-items-center flex-wrap gap-3 p-4 ">
                    {loading ? (
                        <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    ) : posts.length > 0 ? (
                        posts.map((item) => (
                            <div className="card bg-blue-50 hover:bg-gray-300 w-96 shadow-xl" key={item.id}>
                                <div className="card-body">
                                    <h4 className="text-center text-6xl text-amber-600">{item.title}</h4>
                                    <p className="text-center text-3xl text-amber-950">{item.body}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No posts available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Posts;
