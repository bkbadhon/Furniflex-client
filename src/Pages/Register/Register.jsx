import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../../public/g2.jpg'
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

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

    const handleRegister = (e) => {
        e.preventDefault();
        const data = e.target;
        const email = data.email.value;
        const name = data.name.value;
        const password = data.password.value;
        console.log(email, password, name,);

        setRegisterError("");
        setSuccess("");

        if (password.length < 6) {
            setRegisterError("Password must be 6 character");
            return;
        }
        createUser(email, password, name)
            .then((result) => {
                Swal.fire("Good job!", "You logged in!", "success");
                navigate(location?.state ? location.state : "/");
                console.log(result)
                setSuccess("Register Successfull");
            })

            .catch((error) => {
                console.log(error);
                setRegisterError(error.message);
            });

        console.log(createUser);
    };
    return (
        <div className="hero  w-11/12 mx-auto">
            <div className="py-16 md:flex gap-16 justify-center items-center">

                <div className="card bg-gray-200 md:w-1/2 lg:p-16 p-2">
                    <div className="  p-4 ">
                        <h2 className="text-center my-4 text-3xl font-bold">Welcome To</h2>
                        <h2 className="text-3xl text-center font-bold">Furni<span className="text-blue-500">Flex</span></h2>
                        <p className="text-center">Sign up for purchase your desire products.</p>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />

                            </div>
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

                            </div>
                            <label className="label">
                                {registerError && (
                                    <p className="text-red-500">{registerError}</p>
                                )}
                                {success && <p className="text-[#11e7d9]">{success}</p>}
                            </label>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="checkbox" id="" />
                                <h2>Accept our terms and conditions</h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-black">Signup</button>
                            </div>
                        </form>
                        <div className="md:flex gap-2">
                            <button onClick={handleGoogle} className="flex md:w-1/2 w-full mb-1 justify-center gap-2 p-2 items-center border-2 border-black">
                                <FaGoogle className="text-blue-400" />
                                <h2>Sign in with Google</h2>
                            </button>
                            <button className="flex md:w-1/2 w-full justify-center gap-2 mb-1 p-2 items-center border-2 border-black">
                                <FaApple className="text-blue-400" />
                                <h2>Sign in with Apple</h2>
                            </button>
                        </div>
                        <h2 className="my-4 text-center">
                            Already Have an Account ?{" "}
                            <Link to={"/login"}>
                                <span className="text-blue-400">Sign in</span>
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className="relative md:w-1/2 ">
                    <img
                        className="w-full bg-[#0000008c] object-cover"
                        src={img}
                        alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center  my-auto text-white bg-black opacity-60">
                        <div className="text-center items-center my-auto">
                            <h2 className="italic font-extrabold text-5xl my-4">
                                Furni<span className="text-blue-700">Flex</span> 
                            </h2>
                            <p className="text-lg mb-4">only this year our business launch</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;