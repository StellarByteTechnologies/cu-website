'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const philosophies = [
  {
    title: 'Simplified Care',
    desc: 'Effective solutions without unnecessary complexity. Our products provide real results with minimal effort.',
  },
  {
    title: 'Empowering Self-Care',
    desc: 'Helping you embrace confidence and celebrate your individuality. Our skincare and haircare solutions cater to all needs.',
  },
  {
    title: 'Uncompromising Quality',
    desc: 'Every product is crafted with dermatologist-approved ingredients to ensure safety and effectiveness.',
  },
  {
    title: 'Sustainability in Action',
    desc: 'Eco-friendly sourcing and recyclable packaging to support a greener planet and responsible beauty.',
  },
  {
    title: 'Innovation with Heart',
    desc: 'Blending science with compassion to create products that prioritize both results and skin health.',
  },
];

const AboutUs = () => {
  return (
    <section className="mt-[120px] px-4 md:px-6 bg-white">
      <div className="max-w-[1326px] mx-auto">
        {/* ✅ Page Title */}
        <motion.h1
          className="w-full font-bold text-[40px] md:text-[64px] leading-[120%] text-left text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Inventing the Future of Beauty
        </motion.h1>

        {/* ✅ Vision & Mission Section */}
        <div className="flex flex-col md:flex-row gap-[42px] mt-[60px]">
          {[
            {
              title: 'Vision',
              text: '“A world where self-care empowers confidence and celebrates individuality.”',
            },
            {
              title: 'Mission',
              text: '“Inspiring self-celebration through science-backed, dermatologist-approved personal care products.”',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[642px] bg-[#F8F8F8] p-9 pt-[64px] shadow-lg rounded-[12px] transition-transform hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/star.svg"
                alt="Star Icon"
                width={48}
                height={48}
              />
              <h3 className="text-[24px] md:text-[31px] font-bold leading-[120%] text-left mt-[10px]">
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[20px] font-medium leading-[140%] text-left mt-[10px] text-gray-700">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Why Does Diara Exist? */}
      <div className="max-w-[1322px] mx-auto mt-[120px] flex flex-col md:flex-row gap-[25px]">
        <motion.div
          className="w-full md:w-[534px] h-[400px] md:h-[582px] p-4 bg-cover bg-center rounded-[12px] flex items-end"
          style={{ backgroundImage: "url('/images/about.svg')" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-[32px] md:text-[48px] font-semibold leading-[120%] text-left p-4 bg-black bg-opacity-40 rounded-md">
            Why Does Diara Exist?
          </h2>
        </motion.div>

        <motion.div
          className="w-full md:w-[763px] bg-[#F8F8F8] p-9 rounded-[12px] shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[16px] md:text-[20px] font-normal leading-[140%] text-left text-gray-700">
            At Diara, we believe <strong>self-care</strong> isn’t just a
            routine—it’s a celebration of <strong>self-worth</strong>.<br />
            <br />
            In a world overflowing with choices, we saw the need for a personal
            care brand rooted in <strong>authenticity</strong>,{' '}
            <strong>simplicity</strong>, and{' '}
            <strong>exceptional quality</strong>.<br />
          </p>
        </motion.div>
      </div>

      {/* ✅ Our Philosophies Section */}
      <div className="w-full bg-[#F8F8F8] mt-[120px] py-[60px]">
        <div className="max-w-[1322px] mx-auto flex flex-col md:flex-row gap-[50px] px-4">
          {/* Left Section - Title & Icon */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/star.svg"
              alt="Star Icon"
              width={66}
              height={66}
            />
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[120%] text-left mt-[10px]">
              Our Philosophies
            </h2>
            <p className="text-[18px] md:text-[20px] font-medium text-gray-700 leading-[140%] mt-[10px] md:w-[600px]">
              Our core principles define who we are and what we stand for. From
              simplicity to sustainability, each philosophy is a pillar of our
              mission to revolutionize self-care.
            </p>
          </motion.div>

          {/* Right Section - Philosophies List */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[40px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-[12px] bg-white p-5 md:p-6 rounded-lg shadow-md transition-transform hover:scale-[1.05] hover:shadow-lg duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/tick.svg"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-[120%] text-left">
                    {item.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-medium text-gray-600 text-left leading-[140%] mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
