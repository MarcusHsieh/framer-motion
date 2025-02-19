import { motion } from 'framer-motion';

const ColorChangingBox = () => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#34d399" }}
      transition={{ duration: 0.3 }}
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center text-white"
    >
      hover me!
    </motion.div>
  );
}

export default ColorChangingBox;