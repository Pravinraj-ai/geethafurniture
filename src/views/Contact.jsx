import React, { useContext } from "react";

import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={darkMode ? "bg-gray-100 pt-24 min-h-screen" : "bg-black pt-24 text-white min-h-screen"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center">Contact</h2>
        <div className="flex justify-between items-start flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8 mt-12">
            <h4 className="text-3xl font-semibold text-blue-500 mb-4">Visit Us</h4>

            {/* Google Map */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                title="Geetha Furniture Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6346261543884!2d76.99351059999999!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f3069d2f3%3A0x45f84f464eae7e34!2sGeetha%20Furniture!5e0!3m2!1sen!2sin!4v1625052345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address */}
            <div>
              <h5 className="text-xl font-bold mb-2">Address</h5>
              <p className={darkMode ? "text-gray-700 text-lg" : "text-gray-300 text-lg"}>
                27, opposite Vellan hollow block, Karpagam Garden, <br />
                Dhanalakshmi Nagar, Coimbatore, Tamil Nadu 641035
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6" style={{ paddingTop: '40px' }}>
            <h1 className="text-3xl font-bold">Phone</h1>
            <a href="tel:+919443017859" className="mb-2 mt-4 font-semibold text-blue-700 block uppercase">
              +91 9443017859
            </a>
            <a href="tel:+919080420080" className="mb-12 font-semibold text-blue-700 block uppercase">
              +91 9080420080
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a href="mailto:geethafurniture6@gmail.com" className="mb-12 mt-4 font-semibold text-blue-700 block">
              geethafurniture6@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a key={index} href={el.link} className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center">
                  <img alt="" src={el.url} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
