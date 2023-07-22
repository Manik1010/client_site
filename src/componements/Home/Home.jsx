import useTitle from "../../../hooks/useTitle";
import Colleges from "./Colleges/CollegeCards";
import Banner from "./Banner";
// import Serivces from "./Serivces/Serivces";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            Home......
            {/* <Serivces></Serivces> */}
        </div>
    );
};

export default Home;