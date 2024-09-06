import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import img from '../../../public/g4.jpg'
import { FaApple, FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const auth = getAuth(app);
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logIn(email, password)
            .then(result => {
                Swal.fire('Good job!', 'You logged in!', 'success')
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                Swal.fire("Good job!", "You logged in!", "success");
                navigate(location?.state ? location.state : "/");
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="hero  w-11/12 mx-auto">
            <div className="py-16 md:flex gap-16 justify-center items-center">
                <div className="relative md:w-1/2 ">
                    <img
                        className="w-full bg-[#0000008c] object-cover"
                        src={img}
                        alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center  my-auto text-white bg-black opacity-60">
                        <div className="text-center items-center my-auto">
                            <h2 className="italic font-extrabold text-5xl my-4">
                                Furni<span className="text-blue-500">Flex</span> 
                            </h2>
                            <p className="text-lg mb-4">only this year our business launch</p>
                        </div>
                        
                    </div>
                </div>
                <div className="card bg-gray-200 md:w-1/2 lg:p-16 p-2">
                    <div className="  p-4 ">
                        <h2 className="text-left my-4 text-3xl font-bold">Welcome Back !</h2>
                        <p>Enter your crrediantials to access your account.</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-blue-500 text-right link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="checkbox" id="" /> 
                                <h2>Accept our terms and conditions</h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-black">Login</button>
                            </div>
                        </form>
                        <div className="lg:flex my-2 gap-2">
                            <button onClick={handleGoogle} className="flex lg:w-1/2 mt-1 md:w-full w-full justify-center gap-2 p-2 items-center border-2 border-black">
                            <FaGoogle className="text-blue-400"/>
                            <h2>Sign in with Google</h2>
                            </button>
                            <button className="flex lg:w-1/2 md:w-full w-full mt-1 justify-center gap-2 p-2 items-center border-2 border-black">
                            <FaApple className="text-blue-400"/>
                            <h2>Sign in with Apple</h2>
                            </button>
                        </div>
                        <h2 className="my-4 text-center">
                            Have an Account ?{" "}
                            <Link to={"/register"}>
                                <span className="text-blue-400">Sign Up</span>
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;