import React from 'react';
import Navbar from "../components/Navbar";
import B1 from "../assets/b-1.jpg";
import vb1 from "../assets/v-b1.mp4";

function About() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
          BELTEI International University
      </h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8​ flex">
          {/* Video Section */}
          <div>
            <video
              className="rounded-lg shadow-lg w-full"
              src={vb1}
              controls
              autoPlay
              loop
              muted
              title="BELTEI International University Introduction"
            ></video>
          </div>

          {/* Text Content */}
          <div className='px-5'>
            <p className="text-base leading-relaxed mb-4">
              BELTEI International University is a premier private institution in Cambodia, committed to providing
              quality education that meets international standards. It offers a range of programs, including
              undergraduate and graduate degrees, as well as short courses aimed at enhancing skills and employability.
            </p>
            <p className="text-base leading-relaxed mb-4">
              The university’s mission is to produce graduates who are globally competitive and can contribute to the
              development of Cambodia. BELTEI prides itself on its modern teaching methodologies, state-of-the-art
              facilities, and partnerships with international institutions.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Core values like integrity, excellence, and lifelong learning define BELTEI International University’s
              approach to education.
            </p>
            <p className="text-base leading-relaxed mb-4 py-7 ml-[-40rem]">
              Established in 2002, BELTEI International University has grown to become one of the leading educational institutions in Cambodia. The university is known for its commitment to academic excellence and its focus on providing students with the skills and knowledge they need to succeed in a globalized world.
            </p>
            <p className="text-base leading-relaxed mb-4  ml-[-40rem]">
              BELTEI offers a diverse range of programs across various fields of study, including Business Administration, Information Technology, Engineering, and Health Sciences. The university also places a strong emphasis on research and innovation, encouraging students and faculty to engage in cutting-edge research projects.
            </p>
            <p className="text-base leading-relaxed mb-4  ml-[-40rem]">
              In addition to its academic programs, BELTEI International University is dedicated to providing students with a well-rounded education. The university offers a variety of extracurricular activities, including sports, cultural events, and community service opportunities, to help students develop their leadership and teamwork skills.
            </p>
            <p className="text-base leading-relaxed  ml-[-40rem]">
              BELTEI International University is committed to fostering a supportive and inclusive learning environment. The university provides a range of support services, including academic advising, career counseling, and mental health resources, to help students succeed both academically and personally.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">Explore Our Campus</h2>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={B1}
              alt="BELTEI International University Campus"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;