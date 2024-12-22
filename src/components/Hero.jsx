
const Hero = ({img}) => {
    return (
        <div>
            <div className="hero-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="image">
                                <img src={img} alt="Hero image"/>
                            </div>
                            <div className="text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;