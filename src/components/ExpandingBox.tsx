import { motion } from 'framer-motion';
import { useState } from 'react';

const ExpandingBox = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      animate={{ width: expanded ? 200 : 120, height: expanded ? 200 : 120 }}
      transition={{ duration: 0.5 }}
      className="w-24 h-24 bg-yellow-500 rounded-lg flex items-center justify-center text-white cursor-pointer"
    >
      {expanded ? "i expanded" : "expand me!"}
    </motion.div>
  );
}

export default ExpandingBox;