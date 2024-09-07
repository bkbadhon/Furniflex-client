
import { useState, useEffect, useContext } from "react";
import Footer from "../../../componenet/Footer/Footer";
import Navbar from "../../../NavBar/Navbar";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { CiCircleInfo } from "react-icons/ci";

const Cart = () => {
    const {carts , user} = useContext(AuthContext)  
    const [localCart, setLocalCart] = useState(carts);

    

    useEffect(() => {
        if (user && user.email) {
            axios.get(`https://furni-flex-server-lilac.vercel.app/cart?email=${user.email}`)
                .then(response => setLocalCart(response.data))
                .catch(error => console.error('Failed to fetch cart:', error));
        } else {
            setLocalCart(carts);
        }
    }, [user, carts]);


    useEffect(() => {
        setLocalCart(carts);
    }, [carts]);

    const handleQuantityChange = (itemId, delta) => {
        const updatedCart = localCart.map(item =>
            item._id === itemId
                ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) }
                : item
        );
        setLocalCart(updatedCart);

        axios.put(`https://furni-flex-server-lilac.vercel.app/cart/${itemId}`, { quantity: updatedCart.find(item => item._id === itemId).quantity })
        .then(res => {
            console.log( res.data);
        })
        .catch(err=> {
            console.error(err);
        });
    };


   

    const handleDelete=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
                axios.delete(`https://furni-flex-server-lilac.vercel.app/cart/${id}`)
                .then(res=>{
    
                    if(res.data.deletedCount > 0){
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
    
                    }
                }
                )
            }
          });
    
    }

    const total = localCart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);

    return (
        <div>
            <Navbar />
            <div className="w-10/12 my-8 mx-auto lg:flex lg:gap-16">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl mb-6 font-semibold">An overview of your order</h2>
                    <div className="mb-4 bg-gray-200 p-4 rounded-xl">
                        {localCart.length > 0 ? (
                            localCart.map((item) => (
                                <div className="my-4 flex border-b border-gray-300 justify-between" key={item._id}>
                                    <div className="flex gap-2">
                                        <div className="flex gap-4 items-center">
                                            <div className="flex border-2 border-white p-2 items-center">
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, -1)}
                                                    className="lg:w-8 md:w-4 h-8 flex items-center justify-center text-lg"
                                                >
                                                    -
                                                </button>
                                                <span className="lg:w-8 md:w-4 h-8 flex items-center justify-center text-lg">
                                                    {item.quantity || 1}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, 1)}
                                                    className="lg:w-8 md:w-4 h-8 flex items-center justify-center text-lg"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <img className="md:w-32 md:h-32 w-20 h-20 mb-2 rounded-xl bg-white p-2" src={item.image} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-grow">
                                            <h2 className="mt-4 md:text-xl text-sm font-semibold">{item.name}</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-end">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="mb-2"
                                        >
                                            <IoMdClose className="text-2xl" />
                                        </button>
                                        <h2 className="font-bold">${(item.price * (item.quantity || 1)).toFixed(2)}</h2> {/* Total price */}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <h2 className="text-2xl mb-6 font-semibold">Order Details</h2>
                    <div className="bg-gray-200 rounded-xl p-4 my-4">
                        <div className="flex my-2 justify-between">
                            <h2>Subtotal</h2>
                            <h2>${total}</h2>
                        </div>
                        <div className="flex my-2 justify-between">
                            <h2>Shipping</h2>
                            <h2>Free</h2>
                        </div>
                        <div className="flex my-2 justify-between">
                            <h2 className="flex items-center gap-1">Estimated Tax <CiCircleInfo /></h2>
                            <h2>$-</h2>
                        </div>
                        <div className="flex my-4 justify-between">
                            <h2 className="text-xl font-semibold">Total</h2>
                            <h2 className="text-xl font-semibold">${total}</h2>
                        </div>
                    </div>
                    <button className="bg-black w-full mx-auto text-lg uppercase hover:bg-blue-500 duration-500 text-white p-1 px-4 rounded-xl">go to checkout</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
