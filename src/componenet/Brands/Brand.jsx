import brand1 from '../../../public/4.png'
import brand2 from '../../../public/3.png'
import brand3 from '../../../public/lounge-removebg-preview.png'
import brand4 from '../../../public/steelcase-removebg-preview.png'
const Brand = () => {
    return (
        <div className='w-10/12 mx-auto my-8'>
      <div className="text-center my-16">
        <h2 className="text-4xl my-2 font-bold">
          Our <span className="text-blue-500">Special</span> Brands
        </h2>
        <p>
        Leading companies in the office furniture industry are renowned <br /> for their commitment to ergonomic design and innovation
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center grid-cols-2 gap-8">
        <div className="shadow-lg w-56 border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-blue-500 my-auto">
          <img className="w-20 object-cover h-20 mx-auto" src={brand1} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">
            Rocking Chair
          </h2> 
        </div>
        <div className="shadow-lg border-2 w-56 py-2 rounded-xl duration-1000 hover:text-white hover:bg-blue-500 my-auto">
          <img className="w-20 object-cover h-20 mx-auto" src={brand2} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">
            Side Chair
          </h2> 
        </div>
        <div className="shadow-lg w-56 border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-blue-500 my-auto">
          <img className="w-20 object-cover h-20 mx-auto" src={brand3} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">
            Lounge Chair
          </h2> 
        </div>
        <div className="shadow-lg w-56 border-2 py-2 rounded-xl duration-1000 hover:text-white hover:bg-blue-500 my-auto">
          <img className="w-20 object-fit h-20 mx-auto" src={brand4} alt="" />
          <h2 className="text-center text-2xl my-4 font-semibold">
            Steelcase Chair
          </h2> 
        </div>
        
        
      </div>
    </div>
    );
};

export default Brand;