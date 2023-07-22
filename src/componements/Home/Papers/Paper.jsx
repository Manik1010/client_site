import { Link } from "react-router-dom";

const Paper = ({paper}) => {
    const { title, year, id, college, abstract, link, authors } = paper;
    // console.log(authors[0]);
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 p-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            {/* <img className="p-8" src={image} alt="Movie" /> */}
            <div className="card-body p-6">
            <div className="absolute top-4 right-4 p-2 rounded-md"> <Link to={link}>View Paper</Link></div>
                <h4> <span className="font-semibold">Paper Title: </span>  {title}</h4>
                <p> <span className="font-semibold">Instructor Name: </span>  {college}</p>
                <p> <span className="font-semibold">Author Name's: </span>  {authors[0]}</p>
                <p> <span className="font-semibold">Author Name's: </span>  {authors[1]}</p>
                <p> <span className="font-semibold">Paper Publicstion: </span>  {year}</p>
                <p><span className="font-semibold">Description: </span> {abstract}</p>
            </div>

        </div>
    );
};

export default Paper;