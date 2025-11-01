import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id="about" className="bg-white">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pb-12">
        <div>
          <div className="flex flex-col md:flex-row gap-4 mt-12 px-4 sm:px-6 md:px-0">
            <motion.div className="md:w-4/5 order-2 md:order-1 mx-auto mt-0">
              <p className="text-xl italic text-center text-gray-600 leading-relaxed">

                "Geetha furniture is best in manufacturing different types of modern 
                and traditional furniture since 2000. Geetha furniture success has reached 
                its peak from its ability to produce high quality furniture and showcasing 
                unique furniture designs. We carry incredibly helpful and beautiful selection 
                of furniture! We supply products throughout Coimbatore, Ooty, Coonoor and Pollachi. 
                Our focus is on delivering functional stylish and sustainable furniture that enhances 
                living and working environments"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
