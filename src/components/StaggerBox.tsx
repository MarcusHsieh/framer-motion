import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const StaggeredBoxes = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      boxes staggered
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-4"
      >
        <motion.div variants={itemVariants} className="w-16 h-16 bg-red-500 rounded" />
        <motion.div variants={itemVariants} className="w-16 h-16 bg-blue-500 rounded" />
        <motion.div variants={itemVariants} className="w-16 h-16 bg-green-500 rounded" />
      </motion.div>
    </div>
  );
}

export default StaggeredBoxes;