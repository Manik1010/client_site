// import { useEffect, useState } from "react";
import { FaLocationArrow, FaEdit } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Event from "./event";
import Sport from "./Sport";
// import { useState } from "react";

const Collage = () => {
    const { _id } = useParams();
    // console.log("College ID:", _id);

    const colleges = useLoaderData();
    // console.log(colleges);

    const college = colleges.find(obj =>
        obj._id == _id
    )
    // console.log(college);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedUser, setSelectedUser] = useState(null);
    // const [updatedRole, setUpdatedRole] = useState("");

    //   const handleEdit = (user) => {
    //       // Additional logic if needed
    //       setSelectedUser(user);
    //       setUpdatedRole(user.role);
    //       setIsModalOpen(true);
    //   };
    //   const handleCloseModal = () => {
    //       setIsModalOpen(false);
    //   };

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{college.name}</h1>
                        <FaLocationArrow></FaLocationArrow><span className="ml-[20px]">{college.location}</span>
                        <p>Available Set: {college.available_seats}</p>
                        <p>Total Sets: {college.total_seats}</p>
                        <p>Course Fee: ${college.total_fee}</p>
                        <p>Research: {college.research_history}</p>
                        {/* <p>Admission Date: {college.admission_dates.fall} <br /> <span className="ml-[120px]">{college.admission_dates.spring}</span></p> */}
                        <p><span>Admission Process:</span> <br />{college.admission_process.offline.deadline} <br /> <span>{college.admission_process.online.description}</span>
                            <button className="btn btn-sm btn-active btn-ghost">Apply Now</button>
                        </p>
                        <p>Description: {college.details}</p>
                        <button
                            // onClick={() => handleEdit()}
                            className="btn btn-ghost bg-red-400  text-white ml-2"
                        ><FaEdit></FaEdit></button>
                    </div>
                </div>
            </div>
            <div className="mx-auto text-center md:w-4/12 my-8">
                <p className="text-yellow-600 uppercase mb-2">...Some Event of...</p>
                <h3 className="text-3xl  border-y-4"> {college.name} </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
                {
                    college.events?.map(event => (
                        <Event
                            key={event.id}
                            event={event}
                        ></Event>
                    ))
                }

            </div>

            <div className="mx-auto text-center md:w-4/12 my-8">
                <p className="text-yellow-600 uppercase mb-2">...Some Sports of...</p>
                <h3 className="text-3xl  border-y-4"> {college.name} </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    college.sports?.map(sport => (
                        <Sport
                            key={sport.id}
                            sport={sport}
                        ></Sport>
                    ))
                }

            </div>
        </div>
    );
};

export default Collage;