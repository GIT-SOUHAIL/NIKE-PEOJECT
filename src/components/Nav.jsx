
import { useState } from 'react';
import { open } from '../assets/icons';
import { headerLogo } from '../assets/images/index';
import { motion , AnimatePresence } from 'framer-motion';
import { close } from '../assets/icons';
import { JORDAN } from '../assets/icons';



const Nav = () => {

  const [side , setSide] = useState(true)
  const activeside = () => {
    setSide(prev => !prev)
  }

  const closeside = () => {
    setSide(prev => !prev)
  }
  
  return (
    <motion.nav
        initial={{y:-30 , opacity : 0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:1 , type:"keyframes"}}
        className='w-full relative  z-[20] font-palanquin'  >
        <div className=" w-full mt-1  absolute top-0 flex items-center justify-between ">
        <img src={headerLogo} alt="nike" width={120} height={120} className='m7:w-[100px]' />
        <ul className=' hidden m8:flex m8:gap-[1rem] m9:gap-[1.9rem] lg:gap-[3rem] xl:gap-[5rem]  text-[15px] text-slate-gray font-bold  '>
        <a href="#"><li className='hover:scale-[1.1] transition-all'>Home</li></a> 
        <a href="#"><li className='hover:scale-[1.1] transition-all'>About Us</li></a> 
        <a href="#"><li className='hover:scale-[1.1] transition-all'>Products</li></a> 
        <a href="#"><li className='hover:scale-[1.1] transition-all'>Contact Us</li></a> 
        </ul>
        <div className='hidden m7:flex '>
        <img className=' rounded-md  rotate-[10deg] ' src={JORDAN} alt="NIKE" width={45} height={45} />
        </div>
        <div className='hidden'>{side}</div>
       <AnimatePresence>
        { !side &&
        
        <motion.ul
        initial = {{x : 0  }}
        animate ={{x : 270  }}
        transition={{duration:0.7 , ease: "linear" }}
        exit={{x:-270 }}
         className='m7:hidden  flex flex-col h-screen gap-[2rem] px-[5rem]  py-[5rem] absolute left-[-290px] -top-2 border-[4px] backdrop-blur-sm bg-white/30   rounded transition-all'>
          <li className='hover:scale-[1.1] hover:text-coral-red transition-all text-[25px] font-bold text-black' >Home</li>
          <li className='hover:scale-[1.1] hover:text-coral-red transition-all text-[25px] font-bold text-black' >About Us</li>
          <li className='hover:scale-[1.1] hover:text-coral-red transition-all text-[25px] font-bold text-black' >Products</li>
          <li className='hover:scale-[1.1] hover:text-coral-red transition-all text-[25px] font-bold text-black' >Contact Us</li>
        </motion.ul>
        }
        </AnimatePresence>
        {side ? 
        <img 
        src={open}
        alt="" 
        width={50}
        height={50} 
        className='m7:hidden '
        onClick={activeside}
        />
        :
        <img 
        src={close}
        alt="" 
        width={50}
        height={50} 
        className='m7:hidden '
        onClick={closeside}
        />
       }
        </div>
    </motion.nav>
  )
}

export default Nav
