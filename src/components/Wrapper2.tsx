"use client"; // include this!!

import Link from 'next/link';
import React from 'react';

import AnimatedBox from '@/components/AnimatedBox';
import InteractiveBox from '@/components/InteractiveBox';
import MultiBox from '@/components/MultiBox';
import ToggleBox from '@/components/ToggleBox';
import DragBox from '@/components/DragBox';
import SpinBox from '@/components/SpinBox';
import StaggeredBoxes from '@/components/StaggerBox';
import ExpandingBox from '@/components/ExpandingBox';
import ColorChangingBox from '@/components/ColorChangingBox';
import BouncingBox from '@/components/BouncingBox';
import PathBox from '@/components/PathBox';

import ScrollBox from '@/components/ScrollBox';

const Wrapper2 = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-500">
      <h1 className="text-3xl font-bold text-center mb-8">
        Framer Motion!
      </h1>
      
      {/* BOX SECTION */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <AnimatedBox />
        </div>
        <div className="flex justify-center">
          <InteractiveBox />
        </div>
        <div className="flex justify-center">
          <MultiBox />
        </div>
        <div className="flex justify-center">
          <DragBox />
        </div>
        <div className="flex justify-center">
          <SpinBox />
        </div>
        <div className="flex justify-center">
          <ExpandingBox />
        </div>
        <div className="flex justify-center">
          <ColorChangingBox />
        </div>
        <div className="flex justify-center">
          <BouncingBox />
        </div>
        <div className="flex justify-center">
          <PathBox />
        </div>
        <div className="flex justify-center">
          <StaggeredBoxes />
        </div>
        <div className="flex justify-center">
          <ToggleBox />
        </div>
      </div>
      
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
    </div>
  );
};

export default Wrapper2;
