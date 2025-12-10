import React from "react";
import logo from '../assets/logo.svg';


const Footer = () => {
  return (
    <footer className=" bg-[#170224] text-white
  px-12 py-10
  mt-10
  max-w-[calc(100%-200px)]
  mx-auto
  rounded-full
  overflow-hidden p-10 gap-5 text-center  shadow-[#11001C]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left p-5 ">

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: studysphere@studentapp.com</p>
          <p>Phone: +91 9879879871</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 ms-5">Address</h3>
          <p>Student Assistance HQ</p>
          <p>Mumbai, Maharashtra</p>
          <p>India</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
            <img src={logo} className="h-12" />
          </div>
          <p className="mt-2">Our Official Logo</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-lg font-semibold">StudySphere</p>
        <p className="text-sm mt-1">© 2025 StudySphere. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;