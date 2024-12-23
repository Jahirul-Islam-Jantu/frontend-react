import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    {/* Header Section */}
                    <div className="header-section">
                        <div className="header container-fluid flex justify-between items-center py-4">
                            {/* Logo */}
                            <div className="logo">
                                <a href="/">
                                    <img src="logo.png" alt="Logo" className="h-12 w-auto" />
                                </a>
                            </div>

                            {/* Contact Section */}
                            <div className="header-contact-section hidden md:flex gap-8">
                                <div className="header-contact flex items-center gap-2">
                                    <img src="call.png" alt="Call" className="h-6 w-6" />
                                    <a className="flex flex-col text-sm" href="tel:+980009630">
                                        call anytime <strong className="text-base">+ 98 (000) - 9630</strong>
                                    </a>
                                </div>
                                <div className="header-contact flex items-center gap-2">
                                    <img src="email.png" alt="Email" className="h-6 w-6" />
                                    <a className="flex flex-col text-sm" href="mailto:ambed@agrios.com">
                                        send email <strong className="text-base">ambed@agrios.com</strong>
                                    </a>
                                </div>
                                <div className="header-contact flex items-center gap-2">
                                    <img src="location.png" alt="Location" className="h-6 w-6" />
                                    <a className="flex flex-col text-sm" href="https://maps.app.goo.gl/7YGApNzmvrg57arRA">
                                        380 St Kilda Road <strong className="text-base">Melbourne, Australia</strong>
                                    </a>
                                </div>
                            </div>

                            {/* Toggle Button for Mobile */}
                            <button
                                className="block md:hidden text-black focus:outline-none z-20"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Navbar Links */}
                    <div
                        className={`navbar ${
                            isMenuOpen ? "block" : "hidden"
                        } md:block bg-[rgba(228,226,215,0.63)] py-2`}
                    >
                        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? "active-item" : "pending-item")}
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? "active-item" : "pending-item")}
                                    to="/aboutus"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? "active-item" : "pending-item")}
                                    to="/gallery"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? "active-item" : "pending-item")}
                                    to="/service"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? "active-item" : "pending-item")}
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;





// import { NavLink } from "react-router-dom";
//
// const Navbar = () => {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-12">
//
//                     {/* Header Section */}
//                     <div className="header-section">
//                         <div className="header container-fluid flex flex-col md:flex-row justify-between items-center py-4">
//                             {/* Logo */}
//                             <div className="logo mb-4 md:mb-0">
//                                 <a href="/">
//                                     <img src="logo.png" alt="Logo" className="h-12 w-auto" />
//                                 </a>
//                             </div>
//
//                             {/* Contact Section */}
//                             <div className="header-contact-section flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8">
//                                 <div className="header-contact flex items-center gap-2">
//                                     <img src="call.png" alt="Call" className="h-6 w-6" />
//                                     <a className="flex flex-col text-sm" href="tel:+980009630">
//                                         call anytime <strong className="text-base">+ 98 (000) - 9630</strong>
//                                     </a>
//                                 </div>
//                                 <div className="header-contact flex items-center gap-2">
//                                     <img src="email.png" alt="Email" className="h-6 w-6" />
//                                     <a className="flex flex-col text-sm" href="mailto:ambed@agrios.com">
//                                         send email <strong className="text-base">ambed@agrios.com</strong>
//                                     </a>
//                                 </div>
//                                 <div className="header-contact flex items-center gap-2">
//                                     <img src="location.png" alt="Location" className="h-6 w-6" />
//                                     <a className="flex flex-col text-sm" href="https://maps.app.goo.gl/7YGApNzmvrg57arRA">
//                                         380 St Kilda Road <strong className="text-base">Melbourne, Australia</strong>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Navbar Links */}
//                     <div className="navbar container-fluid bg-[rgba(228,226,215,0.63)] py-2">
//                         <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
//                             <li>
//                                 <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/aboutus">
//                                     About Us
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/gallery">
//                                     Gallery
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/service">
//                                     Service
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contact">
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Navbar;
