import useTitle from "../../../hooks/useTitle";
import Colleges from "./Colleges/CollegeCards";
import Banner from "./Banner";
import Papers from "./Papers/Papers";
import Gallery from "./Gallery/Gallery";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Papers></Papers>
            <Gallery />
        </div>
    );
};

export default Home;