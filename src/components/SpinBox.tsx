import { motion } from 'framer-motion';

const RotatingBox = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      // transition={{ duration: 2, ease: "backInOut" }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white"
    >
      spinny box
    </motion.div>
  );
}

export default RotatingBox;