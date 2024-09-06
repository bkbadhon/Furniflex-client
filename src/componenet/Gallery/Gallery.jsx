import img1 from '../../../public/g1.jpg'
import img2 from '../../../public/g2.jpg'
import img3 from '../../../public/g3.jpg'
import img4 from '../../../public/g4.jpg'
import img5 from '../../../public/g5.jpg'
import img6 from '../../../public/g6.jpg'
const Gallery = () => {
    return (
        <div className='w-11/12 my-8 mx-auto'>
        <h2 className='text-center text-4xl mb-2 font-bold'>Our Chair <span className='text-blue-500'>Gallery </span></h2>
        <p className='text-center mb-8'> Leading companies in the office furniture industry are renowned <br /> for their commitment to ergonomic design and innovation</p>

        <div className='grid md:grid-cols-4 gap-8'>

        <div className='col-span-2'><img className='lg:h-80 md:h-60 rounded-2xl w-full object-cover' src={img1} alt="" /></div>
        <div ><img className='lg:h-80 md:h-60 object-cover rounded-2xl w-full' src={img2} alt="" /></div>
        <div> <img className='lg:h-80 md:h-60 object-cover rounded-2xl w-full' src={img3} alt="" /></div>
        <div><img className='lg:h-80 md:h-60 object-cover rounded-2xl w-full' src={img4} alt="" /></div>
        <div><img className='lg:h-80 md:h-60 h-40 object-cover rounded-2xl w-full' src={img5} alt="" /></div>
        <div className='col-span-2'><img className='lg:h-80 md:h-60 rounded-2xl w-full object-cover' src={img6} alt="" /></div>
        

        </div>
    </div>
    );
};

export default Gallery;