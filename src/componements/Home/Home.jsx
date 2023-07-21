import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Serivces from "./Serivces/Serivces";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            Home......
            <Serivces></Serivces>
        </div>
    );
};

export default Home;