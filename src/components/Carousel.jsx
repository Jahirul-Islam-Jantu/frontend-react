const Carousel = () => {
    return (
        <div className="carousel container-fluid mx-auto">
            <div id="heroCarousel" className="carousel slide container-fluid bg" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Asstes/img/s2.png" className="d-block " alt="Slide 1"/>
                        <div className="carousel-caption">
                            <h1 className="carousel-head">We Services Circle Limited</h1>
                            <p className="carousel-p">We understand that construction is not merely about bricks and
                                mortar but about building dreams and establishing lasting relationships.</p>
                            <a href="./Pages/service.html" className="slider-btn mx-2">Our Products</a>
                            <a href="./Pages/contact.html" className="slider-btn">Get In Touch</a>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="./Asstes/img/s1.png" className="d-block " alt="Slide 2"/>
                        <div className="carousel-caption">
                            <h1 className=" carousel-head">Your Mechanical Solution.</h1>
                            <p className="carousel-p">We are committed to delivering high-quality mechanical
                                installations and services that meet or exceed industry standards.</p>
                            <a href="./Pages/service.html" className="slider-btn mx-2">Our Products</a>
                            <a href="./Pages/contact.html" className="slider-btn">Get In Touch</a>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="./Asstes/img/s3.png" className="d-block " alt="Slide 2"/>
                        <div className="carousel-caption">
                            <h1 className=" carousel-head">Your Ultimate Electrical Solution.</h1>
                            <p className="carousel-p">We understand that effective electrical management is the backbone
                                of successful construction.</p>
                            <a href="./Pages/service.html" className="slider-btn mx-2">Our Products</a>
                            <a href="./Pages/contact.html" className="slider-btn">Get In Touch</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Asstes/img/aboutbg.jpg" className="d-block " alt="Slide 2"/>
                        <div className="carousel-caption">
                            <h1 className="carousel-head">Your Skilled Manpower Solution.</h1>
                            <p className="carousel-p">Our Manpower Section is the backbone of our construction
                                operations.</p>
                            <a href="./Pages/service.html" className="slider-btn mx-2">Our Products</a>
                            <a href="./Pages/contact.html" className="slider-btn">Get In Touch</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;