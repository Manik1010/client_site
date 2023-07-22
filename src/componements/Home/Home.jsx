import useTitle from "../../../hooks/useTitle";
import Colleges from "./Colleges/CollegeCards";
import Banner from "./Banner";
import Papers from "./Papers/Papers";
// import Serivces from "./Serivces/Serivces";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Papers></Papers>
            Home......
            {/* <Serivces></Serivces> */}
        </div>
    );
};

export default Home;