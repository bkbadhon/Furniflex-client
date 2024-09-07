
import { useContext, useEffect, useState } from "react";
import Footer from "../componenet/Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { IoBag } from "react-icons/io5";
import './product.css'
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
    const { user, products } = useContext(AuthContext); 
    const navigate = useNavigate()
    const location = useLocation()
    const [filterProducts, setFilterProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const lastPage = currentPage * itemsPerPage;
    const firstPage = lastPage - itemsPerPage;
    const records = filterProducts.slice(firstPage, lastPage);
    const numberOfPages = Math.ceil(filterProducts.length / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(num => num + 1);

    const [activeButton, setActiveButton] = useState('rocking chair');

    useEffect(() => {
        if (products) {
            const filteredItems = products.filter(item => item.brand === activeButton);
            setFilterProducts(filteredItems);
            setCurrentPage(1); 
        }
    }, [products, activeButton]);

    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleCart = async (item) => {
      
        if (!user) {
            if (location.pathname !== '/login') {
                navigate('/login', { state: { from: location }, replace: true });
            }
            return; 
        }
    
        try {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                price: item.price,
                image: item.photo,
                brand: item.brand,
                info: item.info,
                quantity: 1,
            };
    
            const response = await axios.post('https://furni-flex-server-lilac.vercel.app/cart', cartItem);
    
            if (response.data.insertedId) {
                Swal.fire({
                    title: 'Good job!',
                    text: `${item.name} added to cart`,
                    icon: 'success',
                });
            }
        } catch (err) {
            console.error('Failed to add item to cart:', err);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add item to cart. Please try again.',
                icon: 'error',
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-8">
                <div className="flex lg:gap-32 md:gap-2">
                    <div className="lg:w-2/12 md:w-3/12  border-r-2 border-gray-200">
                        <button
                            onClick={() => handleButtonClick('rocking chair')}
                            className={`button ${activeButton === 'rocking chair' ? 'active' : ''}`}
                        >
                            Rocking Chair
                        </button>
                        <br />
                        <button
                            onClick={() => handleButtonClick('side chair')}
                            className={`button ${activeButton === 'side chair' ? 'active' : ''}`}
                        >
                            Side Chair
                        </button>
                        <br />
                        <button
                            onClick={() => handleButtonClick('lounge chair')}
                            className={`button ${activeButton === 'lounge chair' ? 'active' : ''}`}
                        >
                            Lounge Chair
                        </button>
                    </div>
                    <div className="lg:w-10/12 mx-auto justify-center grid lg:grid-cols-3 md:grid-cols-2 lg:gap-24 md:gap-8 p-2 items-center">
                        {records.length > 0 ? (
                            records.map((item) => (
                                <div key={item.id} className="border-2 h-auto  w-72 border-gray-200 rounded-xl my-4 p-4 mx-auto">
                                    <img className="w-48 mx-auto h-40 bg-gray-200 my-4 rounded-xl" src={item?.photo} alt={item.name} />
                                    <div className="text-center my-2">
                                        <h2 className="text-lg mb-2 font-semibold">{item.name}</h2>
                                    </div>
                                    <div className="flex justify-around items-center">
                                        <h2 className="mb-2 font-semibold">${item.price}</h2>
                                        <h2 className="mb-2 line-through text-gray-400 font-semibold">${item.previous_price}</h2>
                                        <h2 className="mb-2 font-semibold">{item.discount}% <span className="text-orange-600">OFF</span></h2>
                                    </div>
                                    <h2 className="text-base text-center mb-4">{item.info}</h2>
                                    <div>
                                        <button onClick={() => handleCart(item)} className="w-full p-1 flex items-center justify-center gap-2 hover:bg-blue-500 duration-500 mx-auto bg-black text-white font-semibold text-lg">
                                            <IoBag /> Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                        {filterProducts.length > itemsPerPage && (
                            <div className="pagination">
                                <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                                {pages.map((page) => (
                                    <button
                                        className={`pagination-button ${currentPage === page ? 'selected' : ''}`}
                                        onClick={() => setCurrentPage(page)}
                                        key={page}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button onClick={handleNext} disabled={currentPage === numberOfPages}>Next</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;

