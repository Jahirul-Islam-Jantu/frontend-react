import LayOut from "../components/LayOut.jsx";
import Products from "../components/Products.jsx";


const Gallery = () => {
    return (
        <div>
            <LayOut img='gallery-hero.jpg'/>
            <Products/>
        </div>
    );
};

export default Gallery;