import { motion } from 'framer-motion';
import React from 'react';

const AnimatedBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white"
      
      // props:
      // - initial: starting state before animation
      // - animate: state after the animation runs
      // - transition: timing details for the animation
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      box box
    </motion.div>
  );
};

export default AnimatedBox;
