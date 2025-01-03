import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import CounterApp from "../components/CounterApp.jsx";
import TodoApp from "../components/TodoApp.jsx";


const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <CounterApp/>
            <TodoApp/>

        </div>
    );
};

export default HomePage;