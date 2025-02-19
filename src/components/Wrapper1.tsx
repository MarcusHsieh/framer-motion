"use client"; // include this!!

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import AnimatedBox from './AnimatedBox';
import InteractiveBox from './InteractiveBox';
import MultiBox from './MultiBox';
import ToggleBox from './ToggleBox';
import DragBox from '@/components/DragBox';
import SpinBox from '@/components/SpinBox';
import StaggeredBoxes from '@/components/StaggerBox';
import ExpandingBox from '@/components/ExpandingBox';
import ColorChangingBox from '@/components/ColorChangingBox';
import BouncingBox from '@/components/BouncingBox';
import PathBox from '@/components/PathBox';
import ScrollBox from '@/components/ScrollBox';

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.5 } 
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// array of boxes to display in grid
const boxes = [
  { id: 'animated', Component: AnimatedBox },
  { id: 'interactive', Component: InteractiveBox },
  { id: 'multi', Component: MultiBox },
  { id: 'drag', Component: DragBox },
  { id: 'spin', Component: SpinBox },
  { id: 'expanding', Component: ExpandingBox },
  { id: 'color', Component: ColorChangingBox },
  { id: 'bouncing', Component: BouncingBox },
  { id: 'path', Component: PathBox },
  { id: 'staggered', Component: StaggeredBoxes },
  { id: 'toggle', Component: ToggleBox },
];

const Wrapper1 = () => {
  return (
    <motion.div 
      className="min-h-screen p-8 bg-gray-500"
      initial={{opacity: 0}}
      animate={{opacity: 1 }}
      transition={{duration: 2, ease: "easeInOut"}}
    >
      <h1 className="text-3xl font-bold text-center mb-8">
        Framer Motion!
      </h1>
      
      {/* BOX SECTION */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2"
      >
        {boxes.map(({ id, Component }) => (
          <motion.div 
            key={id}
            variants={item}
            className="flex justify-center"
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>
      
      {/* SCROLL ANIMATION SECTION */}
      <div className="mt-80">
        <h2 className="text-3xl font-bold text-center mb-8">
          Scroll Animation Demo
        </h2>
        
        <div className="space-y-16">
          <ScrollBox className="p-8 bg-blue-500 text-white rounded-lg">
            <h2 className="text-2xl">scroll box 1</h2>
            <p>i fade in and slide up when i enter the viewport!</p>
          </ScrollBox>
          
          <ScrollBox className="p-8 bg-green-500 text-white rounded-lg">
            <h2 className="text-2xl">scroll box 2</h2>
            <p>i also animate on scroll. try scrolling up and down!</p>
          </ScrollBox>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link 
          href="https://motion.dev/docs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          framer motion docs linked here!
        </Link>
      </div>
    </motion.div>
  );
};

export default Wrapper1;
