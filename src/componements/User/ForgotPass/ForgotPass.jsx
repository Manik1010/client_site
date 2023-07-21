
const ForgotPass = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Forget Password !!!</h1>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>


                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type='submit' value='reset'></input>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPass;