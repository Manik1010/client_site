import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyCollege = () => {
    const { user } = useContext(AuthContext)
    const [admissions, setAdmissions] = useState([]);
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/admissions?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setAdmissions(result);
            })
    }, [user])

    // console.log(admissions.collageId)

    useEffect(() => {
        fetch("http://localhost:5000/collages")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setColleges(result);
            })
    }, [])

    const collage = colleges.find(obj =>
        obj._id == admissions.collageId
    )
    // console.log(collage)

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={collage?.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{collage?.name}</h1>
                        <p> <span className="font-semibold">Available Sets: </span>  {collage?.available_seats}</p>
                        <p> <span className="font-semibold">Total Sets: </span>  {collage?.total_seats}</p>
                        <p> <span className="font-semibold">Course Fee: </span>  {collage?.total_fee}</p>
                        <p> <span className="font-semibold">Paper Publicstion: </span>  {collage?.research_history}</p>
                        <p> <span className="font-semibold">Instructor Description: </span>  {collage?.details}
                            {/* <Link to={`/collage/${collage._id}`} className="btn btn-sm btn-active btn-ghost">Details</Link> */}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-center">Personal Information</h1>
                <p> <span className="font-semibold text-center">Candidate Name: </span>  {admissions?.candidateName}</p>
                <p> <span className="font-semibold text-center">Candidate Email: </span>  {admissions?.email}</p>
                <p> <span className="font-semibold text-center">Candidate Phone: </span>  {admissions?.phone}</p>
                <p> <span className="font-semibold text-center">Subject: </span>  {admissions?.subject}</p>
                <p> <span className="font-semibold text-center">Candidate Address: </span>  {admissions?.address}</p>
            </div>
        </>
    );
};

export default MyCollege;