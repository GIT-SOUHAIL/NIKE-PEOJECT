
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
        <a href="/#"><li className='hover:scale-[1.1] transition-all'>Home</li></a> 
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
        initial = {{opacity : 0  }}
        animate ={{opacity:1  }}
        transition={{duration:0.7 , ease:'circOut' }}
        exit={{opacity:0 }}
         className='m7:hidden flex flex-col gap-[2rem] px-[5rem] py-[1rem]  absolute right-[50px] top-[75px]  ring-[2px] ring-coral-red ring-offset-[1px] border-[4px] border-primary rounded bg-coral-red transition-all'>
          <li className='hover:scale-[1.1] transition-all text-[15px] font-bold text-white' >Home</li>
          <li className='hover:scale-[1.1] transition-all text-[15px] font-bold text-white' >About Us</li>
          <li className='hover:scale-[1.1] transition-all text-[15px] font-bold text-white' >Products</li>
          <li className='hover:scale-[1.1] transition-all text-[15px] font-bold text-white' >Contact Us</li>
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
