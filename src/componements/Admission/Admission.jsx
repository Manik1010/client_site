import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Admission = () => {

    const [selectedCollege, setSelectedCollege] = useState(null);
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:5000/collages")
        fetch("https://server-site-sigma.vercel.app/collages")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setColleges(result);
            })
    }, [])

    console.log(selectedCollege)

    const handleCollegeSelection = (collegeId) => {
        setSelectedCollege(collegeId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const frm = event.target;

        const candidateName = frm.candidateName.value;
        const subject = frm.subject.value;
        const email = frm.email.value;
        const phone = frm.phone.value;
        const address = frm.address.value;
        const collageId = selectedCollege;

        // console.log(address, phone, subject, collageId);
        const addmitedCollage = { collageId, candidateName, subject, email, phone, address, }
        // console.log(addmitedCollage);
        fetch('https://server-site-sigma.vercel.app/postAdmission', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addmitedCollage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Collage Admission successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      frm.reset();
                  }
            })
    };
    return (


        <div className="container mx-auto py-8">
            <div className="mx-auto text-center md:w-4/12 my-8">
                <h3 className="text-3xl text-yellow-600 border-y-4"> ...Admission is Here... </h3>
            </div>
            <div className="flex items-center justify-center mt-12">
                {/* List of college names */}
                <ul className="space-y-4">
                    {
                        colleges?.map(collage => (
                            <>
                                <li
                                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                                    onClick={() => handleCollegeSelection(collage._id)}
                                >
                                    <div className="flex-grow font-bold">
                                        Collage Name: <span className="font-semibold">{collage.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <span>{collage.location}</span>
                                    </div>
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>

            {/* Candidate details form */}
            {
                selectedCollege && (
                    <form onSubmit={handleSubmit} className="mt-8 p-4 bg-white shadow-lg rounded-lg">
                        <div className="mx-auto text-center md:w-4/12">
                            <h3 className="text-3xl  border-y-4">... Admission is No!!! ... </h3>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Candidate Name:
                            </label>
                            <input
                                type="text"
                                name="candidateName"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Subject:
                            </label>
                            <input
                                type="text"
                                name="subject"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Candidate Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Candidate Phone:
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Candidate Address:
                            </label>
                            <input
                                type="text"
                                name="address"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                        >
                            Submit
                        </button>
                    </form>
                )
            }
        </div >
    );
};

export default Admission;