
const Sport = ({ sport }) => {
    // console.log(sports);
    const { name, image, date, details } = sport;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <h6>Sport Date : {date}</h6>
                </div>
            </div>
        </div>
    );
};

export default Sport;