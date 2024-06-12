import Button from "./Button"
import { arrowRight } from "../assets/icons"
import {statistics} from '../constant'
import { bigShoe1 ,bigShoe2 , bigShoe3  } from "../assets/images"
import { useState } from "react"
import { motion } from "framer-motion"


const Hero = ()=>{
  const [img , setImg] = useState(bigShoe2) 

  const shoes1 = () => {
    setImg(bigShoe1)
  }
  const shoes2 = () => {
    setImg(bigShoe2)
  }
  const shoes3 = () => {
    setImg(bigShoe3)
  }
 
  return (
    <section
    id="home"
    className=" font-palanquin m8:flex mb-[10rem] py-[5rem]  m8:py-0 " >

     <main
     className="mt-[4rem] m8:mt-[6rem] x6:mt-[24rem] m7:mt-[3rem]  z-[60] m8:w-[45%] ">
      <motion.h2
      initial={{opacity : 0 , x:-150}}
      animate={{opacity : 1 , x:0}}
      transition={{duration:1 }}  
      className=" text-coral-red opacity-90 capitalize mb-[1rem] x6:ml-[38%] m7:ml-[40%] x3:ml-[100px] m8:ml-0">
      Our Summer Colection
      </motion.h2>
      <motion.div
      initial={{opacity : 0 , x:-150}}
      animate={{opacity : 2 , x:0}}
      transition={{duration:2 }}  
      className="x4:ml-[75px] x6:ml-[10px] x4:my-[2rem] x3:ml-[35px] md:ml-[0px]">
      <h2 className="lg:text-[66px] text-[40px] xl:text-[77px] x6:ml-[2%] m7:ml-[15%]  m8:ml-0  l12:text-[70px] l10:text-[60px] m8:text-[40px] x6:text-[70px] x4:text-[30px] capitalize font-bold bg-white rounded-[1px] xl:w-[570px] lg:w-[500px] l10:w-[470px]">
      The new  arrival
      </h2>
      <h2 className="xl:text-[77px] lg:text-[66px] text-[40px] x6:ml-[19%] m7:ml-[27%] x3:ml-[28px]  m8:ml-0  m8:text-[40px] x6:text-[65px] x4:text-[30px] capitalize font-bold -mt-4">
      <span onClick={shoes1} className=" text-coral-red mr-4">
      nike
      </span>
      shoes
      </h2>
      </motion.div>
      <motion.div 
      initial={{opacity : 0 , x:-150}}
      animate={{opacity : 1 , x:0}}
      transition={{duration:2.5 }}  
      className=" hidden m8:block"> 
      <p 
      className=" text-gray-500 text-justify mt-[2rem] text-[10px] lg:text-[14px] xl:text-[16px] ">
      Nike shoes are quite popular! Are you looking for information 
      <br/> 
      about a specific type or style of Nike shoes?
      </p>
      </motion.div>
      <div className="m8:hidden md:ml-[9%] x6:ml-[40px] m7:ml-[100px]" >
      <p       
      className="text-justify md:w-[570px] x6:w-[450px] text-gray-500">
      Nike offers a diverse range of shoes for various activities, including running, basketball,
      and skateboarding. Popular lines include Air Max, Air Jordan, and Zoom, each catering to 
      specific needs like cushioning, style, or agility. Other notable lines include React for 
      comfort and energy return, and Flyknit for lightweight breathability. Nike shoes are renowned for
      their performance,comfort, and iconic designs, making them a favorite among athletes and fashion enthusiasts alike.
      </p>
      </div>
      <Button icon={arrowRight}  text='Nike Shose' variant='bg-coral-red text-gray-100 flex my-[2.7rem] m7:ml-[38%] x6:ml-[33%] x3:ml-[110px] m8:ml-0 ' hover='transition-all hover:last:translate-x-4' />
      <motion.div
      initial={{opacity : 0 , y:150}}
      animate={{opacity : 1 , y:0}}
      transition={{duration:2 }}  
      className="flex gap-[2rem] m7:ml-[35%] x6:ml-[27%] x3:ml-[80px] x4:ml-[74px] m8:ml-0 " >
      {
      statistics.map( (val,key) => ( 
      <h2 
      className="lg:text-[33px] font-bold grid" 
      key={key}>{val.value}   
      <span className="lg:text-[14px] text-gray-500 font-normal ">{val.label}</span>
      </h2>
      ))
      }
      </motion.div>
      </main>

      <main className=" relative bg-hero drop-shadow-lg m8:w-[55%] mt-[4rem] m8:mt-0 x6:mt-[3rem] h-[60vh] l12:h-[90vh] m8:h-[40vh] l10:h-[45vh] ">
      <motion.img
      initial={{opacity : 0 ,scale:0.5}}
      animate={{opacity : 1 , scale:1}}
      transition={{duration:1.3 }}   
      src={img} alt="" width={420} height={420} className=" absolute hover:scale-[1.2] transition-all l10:bottom-[180px] m8:bottom-[120px] right-[70px] xl:right-[80px]
       l10:right-[30px] x3:right-[8px] x3:top-10 m8:right-[15px] x6:right-[50px] m7:right-[130px] m8:top-[80px] xl:top-[130px]  x6:top-[50px] x6:scale-[1] m7:scale-[1.2]
       x6:rotate-[30deg] m8:scale-[0.7] m9:scale-[0.86] l10:scale-[1] xl:scale-[1.2] x3:scale-[0.7] m8:rotate-[-5deg]" />
      <div className="flex  xl:gap-[2.5rem] m9:gap-[0.5rem] m8:gap-[0rem] gap-[1rem] z-[10] absolute bottom-[-50px] xl:right-[80px]
       l12:right-[85px] lg:right-[47px] l10:right-[50px] m9:right-[22px] m8:right-[15px] x6:right-[70px] m7:right-[140px] x3:scale-[0.6] x3:right-[-23px] x4:right-[-20px] x6:scale-[1.2] m8:scale-[1] ">
      <motion.div
      initial={{opacity : 0 , x:-150}}
      animate={{opacity : 1 , x:0}}
      transition={{duration:1.6 }}  
      onClick={shoes1}>
      <Card src={bigShoe1} />
      </motion.div>
      <motion.div
      initial={{opacity : 0 , y:150}}
      animate={{opacity : 1 , y:0}}
      transition={{duration:1.6 }}  
      onClick={shoes2}>
      <Card src={bigShoe2} /> 
      </motion.div>
      <motion.div
      initial={{opacity : 0 , x:150}}
      animate={{opacity : 1 , x:0}}
      transition={{duration:1.6 }}  
      onClick={shoes3}>
      <Card src={bigShoe3} /> 
      </motion.div>
      </div>
      </main>

    </section>
  )
}

// eslint-disable-next-line react/prop-types
export const Card =({src}) => {
  return (
    <div className="w-[120px]  h-[119px] bg-card bg-no-repeat  bg-cover rounded-md active:border-[3px]
                   border-coral-red active:scale-[1] transition-all lg:scale-[1] m9:scale-[0.9] 
                    m8:scale-[0.8] xl:scale-[1.1] shadow-md pt-[10px] ">
    <img src={src} alt="shoes" className="" />
    </div>
  )

}

export default Hero
