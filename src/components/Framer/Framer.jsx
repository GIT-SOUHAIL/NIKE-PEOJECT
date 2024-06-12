import { motion } from "framer-motion"

function Framer() {
  return (
    <div className="ml-[5rem]">
        <motion.div className="bg-blue-700 h-[50px] w-[50px] rounded-full "
       //initial={{backgroundColor : 'blue' , borderRadius : 10 , scale: 0.5}}
       animate={{ 
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
       }}
       transition={{duration : 2 , times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity , ease : 'easeInOut'}} 
       >
      </motion.div>

    </div>
  )
}

export default Framer
