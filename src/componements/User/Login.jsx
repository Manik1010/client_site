import { Link, useLocation, useNavigate } from "react-router-dom";
// import { LoadCanvasTemplate } from 'react-simple-captcha';
// import { Helmet } from "react-helmet-async";
import logo from "../../assets/LoginImg.jpg"
import useTitle from "../../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    useTitle("Login");

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelLogin = event => {
        event.preventDefault();

        const frm = event.target;
        const pass = frm.pass.value;
        const email = frm.email.value;

        // console.log(pass, email)

        signIn(email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: `${user.displayName} Login Successful.`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            // navigate('/')
            navigate(from, { replace: true });

        })
        .catch(error => console.log(error));
    }
    return (
        <>
            {/* <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <form onSubmit={handelLogin}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover"><Link to="/forget">Forgot password?</Link></a>
                                    </label>
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handelCapter} type="text" name='captchar' placeholder="Type the captchar" className="input input-bordered" />
                                </div> */}

                                <div className="form-control mt-6">
                                    <input disabled={false} className="btn btn-active btn-ghost" type='submit' value='Sing In'></input>
                                </div>
                            </form>
                            <p className='my-3 text=center'>Create a Accoutn Plz..<Link className='text-orange-500 font-bold' to="/registation">Sing Up</Link></p>
                            {/* <SocialLogin></SocialLogin> */}
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

export default Login;