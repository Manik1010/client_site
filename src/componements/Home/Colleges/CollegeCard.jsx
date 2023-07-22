import { Link } from "react-router-dom";
const CollegeCard = ({ collage }) => {

    const { name, location, image, id, total_seats, available_seats, total_fee, admission_dates, research_history } = collage;
    // console.log(id)
    return (
        <div
            // className={cardClass}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="relative"
        >
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-md">Available Set: {available_seats}</div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Admission Date: {admission_dates.fall} <br /> <span className="ml-[120px]">{admission_dates.spring}</span></p>
                <p>Total Sets: {total_seats}</p>
                <p>Course Fee: ${total_fee}</p>
                <p>Research: {research_history}</p>
            </div>
            <Link to={`/collage/${id}`} className="btn btn-active btn-ghost">Details</Link>

        </div>
    );
};

export default CollegeCard;