import { footerLinks } from "../constant";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constant";
import { copyrightSign } from "../assets/icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
    initial={{opacity : 0 }}
    whileInView={{opacity : 1}}
    transition={{duration:1.5}}
    id="footer"
    className='max-container bg-black x3:px-[1rem] mt-[6rem] py-[3rem] x4:px-[1.2rem] x5:px-[1.6] x6:px-[2.2rem] m7:px[2.8] m8:px-[3.5rem] m9:px-[4rem] lg:px-[5rem] wide:px-[10rem]'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
      <a href='/'>
      <img
      src={footerLogo}
      alt='logo'
      width={150}
      height={46}
      className='m-0'
      />
      </a>
      <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
      Get shoes ready for the new term at your nearest Nike store. Find
      Your perfect Size In Store. Get Rewards
      </p>
      <div className='flex items-center gap-5 mt-8'>
      {socialMedia.map((icon) => (
      <div
      className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
     key={icon.alt}
     >
     <img src={icon.src} alt={icon.alt} width={24} height={24} />
     </div>
     ))}
     </div>
     </div>
     <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
     {footerLinks.map((section) => (
     <div key={section.title}>
     <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
     {section.title}
     </h4>
     <ul>
     {section.links.map((link) => (
     <li
     className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
     key={link.name}
     >
     <a href={link.link}>{link.name}</a>
     </li>
     ))}
     </ul>
     </div>
     ))}
     </div>
     </div>
     <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
     <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
     <img
     src={copyrightSign}
     alt='copyright sign'
     width={20}
     height={20}
     className='rounded-full m-0'
     />
     <p>Copyright. All rights reserved. Made by SOUHAIL MOUGRANE</p>
     </div>
     <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
     </div>
    </motion.footer>
  );
};

export default Footer;