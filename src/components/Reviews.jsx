import {reviews} from '../constant/index'
import { star } from '../assets/icons'
import { motion } from 'framer-motion'
const Reviews = () => {
  return (
    <motion.section
    initial={{opacity : 0 }}
    whileInView={{opacity : 1 }}
    transition={{duration:1.6 }}  
    className=" grid grid-cols-1 my-[4rem] space-y-[2rem] bg-primary  x3:px-[1rem] x4:px-[1.2rem] x5:px-[1.6] x6:px-[2.2rem] m7:px[2.8] m8:px-[3.5rem] m9:px-[4rem] lg:px-[5rem] wide:px-[10rem]">
    <main className="text-center">
    <h2 className="text-[40px] font-bold ">what our <span className="text-coral-red">customers</span>  say?</h2>
    <p className="text-gray-500 text-justify mt-5 mx-auto max-w-[300px]">Nike shoes receive a range of reviews, as experiences 
    vary depending on the specific model and Quilite individual preferences
    </p>
    </main>
    <main className='w-full flex flex-col items-center justify-center m8:flex-row'>
    {reviews.map( (val , key) => (
    <div key={key} className='w-full flex flex-col items-center rounded-md justify-center shadow-lg gap-[1rem] m-[3rem] px-[2rem] py-[1rem]'>
    <img src={val.imgURL} alt="review" width={80} height={80} className=' rounded-full' />
    <p className='text-gray-500 max-w-[300px]'>{val.feedback}</p>
    <div className='flex gap-2'>
    <img src={star} alt="" />
    <h2>({val.rating})</h2>
    </div>
    <h2 className='font-bold'>{val.customerName}</h2>
    </div>
    ))}
    </main>
    </motion.section>
  )
}

export default Reviews
