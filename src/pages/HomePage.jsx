import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";


const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <h1 className="text-9xl text-blue-900 text-center"> This is Home page</h1>
        </div>
    );
};

export default HomePage;