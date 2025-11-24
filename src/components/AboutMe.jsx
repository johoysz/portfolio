import React from "react";
import Me from "../assets/me.jpg";
import Toga from "../assets/wearingToga.jpg";
import Tux from "../assets/wearingTux.jpg";
import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about-me" ref={ref}>
      <div className="mt-20 relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Topographic background pattern */}
        <div className="absolute inset-0 w-full h-full z-0">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M0,500 C200,300 300,800 500,700 C700,600 800,200 1000,400 L1000,1000 L0,1000 Z"
              className="fill-none stroke-teal-600/50"
              strokeWidth="2"
            />
            <path
              d="M0,300 C200,100 300,600 500,500 C700,400 800,100 1000,200 L1000,1000 L0,1000 Z"
              className="fill-none stroke-teal-600/50"
              strokeWidth="2"
            />
            <path
              d="M0,700 C200,500 300,900 500,800 C700,700 800,400 1000,600 L1000,1000 L0,1000 Z"
              className="fill-none stroke-teal-600/50"
              strokeWidth="2"
            />
            <path
              d="M0,900 C200,700 300,950 500,900 C700,850 800,750 1000,800 L1000,1000 L0,1000 Z"
              className="fill-none stroke-teal-600/50"
              strokeWidth="2"
            />
            <path
              d="M0,600 C200,400 300,700 500,600 C700,500 800,300 1000,500 L1000,1000 L0,1000 Z"
              className="fill-none stroke-teal-600/50"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Main content container */}
        <div className="container mx-auto px-4 py-16 z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <Motion.div
            className="w-full lg:w-full flex flex-col items-start"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Motion.div
              className="border-2 border-white rounded-md px-8 py-4 mb-8"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                About Me
              </h2>
            </Motion.div>

            <Motion.div
              className="bg-gray-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-sm text-white"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Hello!</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  I'm Joy Lyka B. Buangjug, an IT graduate from the University
                  of Cebu – Main with a strong focus on web development. I
                  specialize in both frontend and backend technologies such as
                  React, Laravel, and PostgreSQL. With over four years of
                  experience in photo editing and design using Adobe Photoshop
                  and Lightroom, I bring creativity and attention to detail into
                  my development work.
                  <br />
                  <br />
                  I'm passionate about learning, collaboration, and turning
                  ideas into functional, user-friendly applications.
                </p>
              </div>
            </Motion.div>
          </Motion.div>

          {/* Right content - image */}
          <Motion.div
            className="w-full lg:w-1/2 grid grid-cols-1 gap-4"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Top single image */}
            <img src={Me} className="rounded-xl shadow-lg w-full" />

            {/* Bottom two images */}
            <div className="grid grid-cols-2 gap-4">
              <img src={Toga} className="rounded-xl shadow-lg w-full" />
              <img src={Tux} className="rounded-xl shadow-lg w-full" />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
