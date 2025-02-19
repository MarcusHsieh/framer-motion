import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollBox = ({ children, className }: AnimateOnScrollProps) => {
  // ref for the component's DOM node
  const ref = useRef<HTMLDivElement>(null);
  // animation controls to trigger animations
  const controls = useAnimation();
  // constantly monitor if component is in viewport (20% visible)
  const isInView = useInView(ref, { amount: 0.2 });

  // when visibility changes, start animation
  // basically called when isInView changes
  useEffect(() => {
    if (isInView) {
      // animate in
      controls.start({ opacity: 1, y: 0 });
    } else {
      // animate out
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      // initial state = hidden + slightly lower
      initial={{ opacity: 0, y: 50 }}
      // animation controls binded to component
      animate={controls}
      // 0.5 seconds to complete the controls.<animation>
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollBox;
