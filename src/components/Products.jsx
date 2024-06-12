import {Cardproducts} from '../constant/index'
import { star } from '../assets/icons'
import { motion } from 'framer-motion'

const Products =( ) => {
  return (
    <motion.section 
    id='product'
    initial={{opacity : 0 , x:-150}}
    whileInView={{opacity : 1 , x:0}}
    transition={{duration:1.5 , type:"keyframes"}}
    
    className="w-full flex flex-col gap-[2rem]">
      <main className="w-full space-y-8 ">
       <h2 className=" lg:text-[40px] text-[30px] font-bold capitalize xl:text-start xl:ml-[5rem]  text-center">
        our 
        <span className=" text-coral-red mx-2">popular</span> 
        Products
        </h2>
       <p className=" w-[80%] md:w-[60%] xl:w-[40%] mx-auto xl:mx-[5rem]  text-justify text-gray-500 ">
        Nike offers a diverse range of products including athletic apparel, shoes, andaccessories
        for various sports and lifestyles, catering to both performance and fashion needs
       </p>
      </main>

      <main className="w-full mb-[2rem]">
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-[1rem] md:flex-row  mx-auto lg:ml-[1.3rem] xl:ml-[5rem]'>
      {Cardproducts.map( (card , key) => (
      <div key={key} className='flex flex-col items-center lg:items-start justify-center gap-4'>
      <div className=' bg-card bg-cover bg-no-repeat w-[180px] h-[180px] rounded hover:scale-[0.9] transition-all'>
      <img src={card.imgURL} alt="" />
      </div>
      <div className='flex gap-2'><img src={star} alt="star" /><span className='text-gray-500'>( 4.5 )</span></div>
      <p>{card.name}</p> 
      <h2 className=' text-coral-red font-bold'>{card.price}</h2>
      </div>
      ))}  
      </div>
      </main>
    </motion.section>
  )
}



export default Products
