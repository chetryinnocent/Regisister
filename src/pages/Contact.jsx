import React from 'react';
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
          Contact Us
        </h1>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Address</h2>
            <p className="text-lg leading-relaxed mb-4">
              BELTEI International University<br />
              No. 21, Street 360, Phnom Penh, Cambodia
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Phone</h2>
            <p className="text-lg leading-relaxed mb-4">
              +855 78 5555 07 / +855 95 2222 84
            </p>
            <p className="text-lg leading-relaxed mb-4 ">
              +855 10 9679 79 / +855 67 2222 84
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 ">Email</h2>
            <p className="text-lg leading-relaxed mb-4">
              biu.admin@beltei.edu.kh
            </p>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">Name</label>
                <input className="w-full p-2 rounded-md bg-gray-800 text-white" type="text" id="name" name="name" required />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">Email</label>
                <input className="w-full p-2 rounded-md bg-gray-800 text-white" type="email" id="email" name="email" required />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">Message</label>
                <textarea className="w-full p-2 rounded-md bg-gray-800 text-white" id="message" name="message" rows="4" required></textarea>
              </div>
              <button className="bg-gradient-to-r from-blue-400 to-red-500 py-2 px-4 rounded-md text-white font-semibold active:text-blue-500" type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">Find Us Here</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg shadow-lg w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.760547905942!2d106.68943031533497!3d10.7626229923318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292920b1c1b7%3A0x2b1b1b1b1b1b1b1b!2sBELTEI%20International%20University!5e0!3m2!1sen!2skh!4v1633072800000!5m2!1sen!2skh"
              allowFullScreen=""
              title="BELTEI International University Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;