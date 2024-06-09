import Button from "./Button"
import { motion } from "framer-motion"

const Subscribe = () =>  {
  return (
    <section

      id='contact-us'
      className='max-container  flex justify-between items-center max-lg:flex-col gap-10 x3:px-[1rem] x4:px-[1.2rem] x5:px-[1.6] x6:px-[2.2rem] m7:px[2.8] m8:px-[3.5rem] m9:px-[4rem] lg:px-[5rem] wide:px-[10rem]'
    >
      <motion.h3
      initial={{opacity : 0 , x:-150}}
      whileInView={{opacity : 1 , x:0}}
      transition={{duration:1.6 , type:"keyframes"}}  
      className='text-4xl leading-[50px] lg:max-w-md  text-center font-palanquin font-bold '>
        Sign Up for
        <span className='text-coral-red'> Updates </span> Newsletter
      </motion.h3>
      <motion.div
      initial={{opacity : 0 , x:150}}
      whileInView={{opacity : 1 , x:0}}
      transition={{duration:1.6 , type:"keyframes"}}  
      className='lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-center items-center max-sm:w-full'>
          <Button text='Sign Up' variant='bg-coral-red rounded-[36px] text-gray-100 ' fullWidth />
        </div>
      </motion.div>
    </section>
  )
}

export default Subscribe
