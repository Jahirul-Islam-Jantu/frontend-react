import MenuRoutes from "./utils/MenuRoutes.jsx";
import Carousel from "./components/Carousel.jsx";

const App = () => {


    return (
        <div>
            <MenuRoutes/>
            <h1 className='text-center shadow-slate-950 text-9xl text-zinc-900' >Hello world from Main app</h1>
            <Carousel/>
        </div>
    );
};

export default App;