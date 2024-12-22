import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutUS from "../pages/AboutUS.jsx";
import Gallery from "../pages/Gallery.jsx";
import Service from "../pages/Service.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

const MenuRoutes = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutUS />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default MenuRoutes;