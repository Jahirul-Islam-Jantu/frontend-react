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
        <div className="relative w-auto  mx-auto overflow-hidden transition-all">
            {/* Images */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &#8592;
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        </div>
    );
};

export default Carousel;
