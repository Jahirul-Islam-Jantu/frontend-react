
const Hero = ({ img }) => {
    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
            <img
                src={img}
                alt="Hero image"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                {/* Optional text overlay */}
                <h2 className="text-white text-3xl md:text-5xl font-bold">
                    Welcome to Our Site
                </h2>
            </div>
        </div>
    );
};

export default Hero;










//
// const Hero = ({img}) => {
//     return (
//         <div>
//             <div className="hero-section">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="image">
//                                 <img src={img} alt="Hero image"/>
//                             </div>
//                             <div className="text">
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Hero;