import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    // console.log(user?.photoURL);
    // console.log(user?.name);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://server-site-sigma.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setUsers(result);
            })
    }, [user])
    // console.log(users)
    // console.log(users?.name);



    return (
        <div>
            <div className="mx-auto">
                <div className="bg-white shadow-md rounded-lg p-8 w-1/2 ">
                    <div className="mt-16">
                    <h2 className='text-3xl font-extrabold text-center my-4'>Profile Information</h2>
                        <div className="flex items-center mb-4">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className="rounded-full mr-64"
                            />
                            <div className="mx-auto">
                                <div className="lg:w-[600px]">
                                    <h2 className="text-xl font-semibold">{users?.name}</h2>
                                    <p className="text-gray-600"><span className='font-semibold'>User Email: </span>{users?.email}</p>
                                    <p><span className="font-semibold">User Phone: </span> {users?.phone || 'null'}</p>
                                    <p><span className="font-semibold">User NID: </span> {users?.nid || 'null'}</p>
                                    <p><span className="font-semibold">Present Address: </span> {users?.present || 'null'}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/edit`}>
                                <button className="btn btn-ghost btn-xs">Edite</button>
                            </Link>
                            {/* <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Edit
                        </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;