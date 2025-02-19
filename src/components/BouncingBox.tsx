import { motion } from 'framer-motion';

const BouncingBox = () => {
  return (
    <motion.div
      animate={{
        y: [15, -15, 15] // bouncing, goes from [0 to -30 to 0] every 1 second
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-32 h-32 bg-indigo-500 rounded-lg flex items-center justify-center text-white"
    >
      bounce bounce
    </motion.div>
  );
}

export default BouncingBox;