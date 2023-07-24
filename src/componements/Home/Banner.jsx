import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://topinbangladesh.com/wp-content/uploads/2020/09/Top-10-College-in-Bangladesh.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQp3tWyJPldh5xBXInlsbgDlqTCtgxGuWh7Q&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="data:image/jpeg;base64,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" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="data:image/jpeg;base64,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" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;