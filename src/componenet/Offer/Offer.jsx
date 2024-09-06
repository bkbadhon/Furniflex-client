import img from '../../../public/g2.jpg'
import img2 from '../../../public/black-white-room-empty-chair (1).jpg'
import img3 from '../../../public/mid-century-yellow-armchair-living-room-furniture.jpg'
import img4 from '../../../public/house-decoration-texture-modern-wooden.jpg'
const Offer = () => {
    return (
        <div className="my-24">
      <div className="relative">
        <img
          className="w-full h-72 bg-[#0000008c] object-cover"
          src={img}
          alt=""
        />
        <div className="absolute md:flex justify-around items-center inset-0 text-white bg-black opacity-80">
          <div>
            <h2 className="italic text-4xl my-4">
              Celebrate at one of the most awarded ShopCorner
            </h2>
            <p className="text-lg mb-4">only this year our business launch</p>
          </div>
          <div className="">
            <button className=" p-2 px-4  bg-blue-600 text-white hover:bg-white duration-1000 hover:text-blue-600 rounded-2xl">
              Get Order
            </button>
          </div>
        </div>
      </div>

      <div className="my-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#615EFC]">Daily</span> Offers
          </h2>
          <p className="mt-4">
          Leading companies in the office furniture industry are renowned <br /> for their commitment to ergonomic design and innovation
          </p>
        </div>

        <div className="md:flex w-11/12 mx-auto p-2 gap-4 my-8 items-center">
          <div className="md:w-1/2">
            <img className='' src={img} alt="" />
          </div>

          <div className="md:w-1/2">
            <div className="flex justify-between mb-6 items-center">
              <img className="w-48" src={img2} alt="" />

                  <h2 className='text-xl font-semibold'>Rocking Chair     ------</h2>
                <div className="">

                  <h2>$72</h2>
                </div>
            </div>
            <div className="flex justify-between mb-6 items-center">
              <img className="w-48" src={img3} alt="" />
                <h2 className='text-xl font-semibold'>Rocking Chair     ------</h2>
              <div className="">
                <h2>$142</h2>
              </div>
            </div>
            <div className="flex justify-between  items-center">
              <img className="w-48" src={img4} alt="" />
                <h2 className='text-xl font-semibold'>Rocking Chair     ------</h2>
              <div className="">
                <h2>$92</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Offer;