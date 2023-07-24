import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Edit = () => {
    // const editToy = useLoaderData();
    // const { title, _id, price, img } = singalToy;
    // console.log(editToy);
    const [control, setControl] = useState(false)

    // const { category, details, name, price, qunatity, rating, sub_category, supplier, supplierEmail, url, _id } = editToy
    const handelUpdate = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const email = frm.email.value;
        const phone = frm.phone.value;
        const nid = frm.nid.value;
        const present = frm.present.value;
        // const parment = frm.parment.value;
        const url = frm.url.value;
        // const id = frm.id.value;

        // console.log(name, qunatity, supplier, teast, category, details, url);
        const updateProfile = {name, email, phone, present, nid, url }
        // console.log(updateProfile);

        fetch(`https://server-site-sigma.vercel.app/updateProfile/${users.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Profile Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    //   frm.reset();
                    setControl(!control);
                }
            })



    }
    const { user } = useContext(AuthContext)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://server-site-sigma.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setUsers(result);
            })
    }, [user])

    // console.log(users.name)
    // console.log(users.email)

    return (
        <div className='bg-[#F4F3F0] p-16'>
            <h2 className='text-3xl font-extrabold text-center'>Edit Profile</h2>
            <form onSubmit={handelUpdate}>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={users.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='email' defaultValue={users.email || ''} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Phone</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='phone' defaultValue={users.phone || ''} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User NID Number</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='nid' defaultValue={users.nid || ''} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Present Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='present' defaultValue={users.present || ''} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='url' defaultValue={users.photoURL || ''} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                <div className='md:flex mb-6'>
                    
                    
                    <label className="input-group">
                        <input type="text" name='id' defaultValue={users.name} className="input input-bordered w-full hidden" />
                    </label>
                </div>

                <input type='submit' value="Update Profile" className="btn btn-block" />

            </form>
        </div>
    );
};

export default Edit;