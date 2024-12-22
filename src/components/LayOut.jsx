import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";



const LayOut = ({img}) => {
    return (
        <div>
            <Navbar/>
            <Hero img={img} />

        </div>
    );
};

export default LayOut;