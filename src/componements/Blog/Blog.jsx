import useTitle from "../../../hooks/useTitle";
import AutoPlay from "./AutoPlay";
// import AutoPlayMethods from "./AutoPlayMethods";

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            Blog....

            {/* <AutoPlayMethods></AutoPlayMethods> */}
            <AutoPlay></AutoPlay>
        </div>
    );
};

export default Blog;