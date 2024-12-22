import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    
                    <div className="header-section">
                        
                        <div className="header container-fluid">
                            <div className="logo">
                                <a href="/"><img src="logo.png" alt=""/></a>
                            </div>
                            <div className="header-contact-section">
                                <div className="header-contact">
                                    <img src="call.png" alt="Call"/>
                                    <a className="flex" href="tel:+980009630"> call anytime <strong>+ 98 (000) -
                                        9630</strong></a>
                                </div>
                                <div className="header-contact">
                                    <img src="email.png" alt="Email"/>
                                    <a className="flex" href="mailto:ambed@agrios.com"> send
                                        email <strong> ambed@agrios.com </strong> </a>
                                </div>
                                <div className="header-contact">
                                    <img src="location.png" alt="Location"/>
                                    <a className="flex" href="https://maps.app.goo.gl/7YGApNzmvrg57arRA"> 380 St Kilda
                                        Road <strong> Melbourne, Australia</strong> </a>
                                </div>
                            </div>

                        </div>

                    </div>

                        <div className="navbar container-fluid ">
                            <ul>
                                <li><NavLink className={({isActive}) => isActive ? "active-item" : "pending-item"}
                                             to="/"> Home </NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? "active-item" : "pending-item"}
                                             to="/aboutus"> About Us </NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? "active-item" : "pending-item"}
                                             to="/gallery"> Gallery </NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? "active-item" : "pending-item"}
                                             to="/service"> Service </NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? "active-item" : "pending-item"}
                                             to="/contact"> Contact </NavLink></li>
                            </ul>
                        </div>



                </div>
            </div>
        </div>
    );
};

export default Navbar;