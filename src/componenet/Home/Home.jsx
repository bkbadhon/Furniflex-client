import Navbar from "../../NavBar/Navbar";
import Banner from "../Banner/Banner";
import Brand from "../Brands/Brand";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brand></Brand>
            <Offer></Offer>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;