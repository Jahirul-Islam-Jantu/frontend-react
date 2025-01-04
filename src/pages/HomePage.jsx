import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import CounterApp from "../components/CounterApp.jsx";
import TodoApp from "../components/TodoApp.jsx";
import TodoList from "../components/TodoList.jsx";


const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <TodoApp/>
            <CounterApp/>
            <TodoList />

        </div>
    );
};

export default HomePage;