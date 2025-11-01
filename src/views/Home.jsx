import React from "react";
import { motion } from "framer-motion";
import cloud from "../assets/home_background.JPG"; // Using only light background

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cloud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-gray-100 h-screen w-full flex items-end justify-start px-8 pb-20 md:pb-24"
    >
      <div className="w-full md:w-1/2 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Elevate your space with our elegant designs for everyday living
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
