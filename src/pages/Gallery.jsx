import LayOut from "../components/LayOut.jsx";
import Quotes from "../components/Quotes.jsx";
import Posts from "../components/Posts.jsx";
import Footer from "../components/Footer.jsx";


const Gallery = () => {
    return (
        <div>
            <LayOut img='gallery-hero.jpg'/>
            <Quotes/>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default Gallery;