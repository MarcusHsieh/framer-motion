import { motion } from 'framer-motion';
import React from 'react';

const InteractiveBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center text-white cursor-pointer"
      
      // while on hover/tap -> scale and rotate box
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      
      transition={{ type: "spring", stiffness: 300 }}
    >
      springy box
    </motion.div>
  );
};

export default InteractiveBox;
