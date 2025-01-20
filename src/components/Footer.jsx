import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto w-full ml-[7rem]">
        <div>
          <h3 className="text-md font-semibold mb-4">Study Materials</h3>
          <ul>
            <li className="text-neutral-300 hover:text-white">Library</li>
            <li className="text-neutral-300 hover:text-white">Laboratory</li>
            <li className="text-neutral-300 hover:text-white">Meeting room</li>
            <li className="text-neutral-300 hover:text-white">Classroom</li>
            <li className="text-neutral-300 hover:text-white">Cooperative Hall (2000 people)</li>
            <li className="text-neutral-300 hover:text-white">Restaurant</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Student Activities</h3>
          <ul>
            <li className="text-neutral-300 hover:text-white">Study tour in the country</li>
            <li className="text-neutral-300 hover:text-white">Study Abroad Study Tour</li>
            <li className="text-neutral-300 hover:text-white">Internship in the country</li>
            <li className="text-neutral-300 hover:text-white">Overseas internship</li>
            <li className="text-neutral-300 hover:text-white">Internship in the country</li>
            <li className="text-neutral-300 hover:text-white">Overseas Internship</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Alumni</h3>
          <ul>
            <li className="text-neutral-300 hover:text-white">Doctoral degree</li>
            <li className="text-neutral-300 hover:text-white">Master's degree</li>
            <li className="text-neutral-300 hover:text-white">Bachelor Degree</li>
            <li className="text-neutral-300 hover:text-white">Associate Degree</li>
            <li className="text-neutral-300 hover:text-white">Student work</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;