import { motion } from 'framer-motion';

const DragBox = () => {
  return (
    <motion.div
      drag
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-32 h-32 bg-orange-500 rounded-lg flex items-center justify-center text-white cursor-pointer"
    >
      drag box
    </motion.div>
  );
}

export default DragBox;