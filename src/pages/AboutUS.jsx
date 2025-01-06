import LayOut from "../components/LayOut.jsx";
import Footer from "../components/Footer.jsx";


const AboutUs = () => {
    return (
        <div>
            <LayOut img="about-hero.jpg"/>
            <h1 className="text-9xl text-blue-900 text-center"> This is About page</h1>
            <Footer/>
        </div>
    );
};

export default AboutUs;