import { motion } from 'framer-motion';
import React from 'react';

// variants!
const boxVariants = {
  // not on screen when hidden
  hidden: { opacity: 0, x: -100 },
  // x goes from -100 to 0 (slides onto screen) + fades in
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.1, rotate: 5 }
};

const MultiBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center text-white cursor-pointer"
      
      // link variant and use it in props
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      
      transition={{ duration: 0.5 }}
    >
      variants box
    </motion.div>
  );
};

export default MultiBox;
