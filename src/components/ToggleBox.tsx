import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const ToggleBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        toggle me
      </button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            toggle box
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleBox;
