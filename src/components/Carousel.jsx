import { useState, useEffect } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "s1.jpg",
        "s2.jpg",
        "s3.jpg",
        "s4.jpg",
        "s5.jpg",

    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-auto mb-10 mx-auto overflow-hidden transition-all">
            {/* Images */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-auto"
                    />
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-40"
            >
                &#8592;
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-40"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 ">
                <div className="border bg-black bg-opacity-40 container w-8/12 rounded px-5 py-5">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-5">
                        Welcome to Our Site
                    </h2>
                    <p className="text-white text-2xl md:text-2xl font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem facere fuga
                        illum, minima odio veniam. Consequatur eveniet optio quo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
