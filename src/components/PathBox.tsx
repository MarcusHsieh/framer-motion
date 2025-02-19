import { motion } from 'framer-motion';

const PathBox = () => {
  return (
    <motion.div
      animate={{
        x: [0, 50, 50, 0, 0],
        y: [0, 0, 50, 50, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white"
    >
      Path
    </motion.div>
  );
}

export default PathBox;