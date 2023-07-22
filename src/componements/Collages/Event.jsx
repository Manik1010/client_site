
const Event = ({event}) => {
    // console.log(event);
    const { name, image, date, details} = event;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">{date}</button> */}
                    <h4>Event Date: {date}</h4>
                </div>
            </div>
        </div>
    );
};

export default Event;