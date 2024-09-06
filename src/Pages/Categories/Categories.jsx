import Navbar from "../../NavBar/Navbar";
import Lottie from 'lottie-react';
import animation from '../../../public/Animation - 1725546698504.json'
const Categories = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div>
            <Lottie className='w-1/3 mx-auto' animationData={animation} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Categories;