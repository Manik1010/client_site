import { Link } from "react-router-dom";
import logo from "../../assets/LoginReg.jpg"
import useTitle from "../../../hooks/useTitle";

const Registation = () => {
    useTitle("Registation");
    const handelRegistation = event => {
        event.preventDefault();

        const frm = event.target;
        const name = frm.name.value;
        const pass = frm.pass.value;
        const email = frm.email.value;

        console.log(pass, email, name)

        // signIn(email, pass)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //     // navigate('/')
        //     navigate(from, { replace: true });

        // })
        // .catch(error => console.log(error));
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Register now!</h1>
                            <form onSubmit={handelRegistation}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='pass' placeholder="password" className="input input-bordered" />
                                </div>


                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type='submit' value='Registation'></input>
                                </div>
                            </form>
                            <p className='my-3 text=center'>Alreadey have a Account...<Link className='text-orange-500 font-bold' to="/login">Sing In</Link></p>
                        </div>
                    </div>
                    <div className="w-1/2 mr-12">
                        <img src={logo}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registation;