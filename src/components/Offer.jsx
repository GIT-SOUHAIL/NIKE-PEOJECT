import { offer } from "../assets/images"
import Button from '../components/Button'
import { arrowRight } from "../assets/icons"
import { motion } from "framer-motion"
const Offer = () => {
  return (
    <motion.section
    initial={{opacity : 0 , x:-150}}
    whileInView={{opacity : 1, x:0}}
    transition={{duration:1.5}}
    className="my-[1rem]  flex items-center  justify-center gap-[1rem] flex-col m8:flex-row">
      <main className="w-full x5:ml-[10rem] m8:ml-0">
      <img src={offer} alt="offer" height={600} width={600} />
      </main>
      <main className="space-y-[3rem] my-auto">
        <h1 className="font-bold text-center m8:text-start text-[40px]"> <span className="text-coral-red">special </span> offer</h1>
        <p className="m8:text-justify text-center x5:px-[7rem] m8:px-0 m8:w-[80%] ">
        Nike offers a wide range of products, including athletic footwear, apparel, and accessories for various sports and lifestyles.
        They cater to performance needs while also focusing on style and comfort
        </p>
        <div className="x5:w-[50%] ml-[1rem] x6:ml-[8rem] m7:ml-[12rem] mx-auto m8:mx-0 flex gap-[1rem]">
        <Button text='Shop New' variant='bg-coral-red flex text-gray-100'  icon={arrowRight} />
        <Button text='Learn More' variant='border-[1px] border-gray-500 text-black' />          
        </div>
      </main>
    </motion.section>
  )
}

export default Offer
