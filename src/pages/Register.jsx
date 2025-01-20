import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

function Register() {
  const [students, setStudents] = useState([
    { name: "", email: "", phone: "", dob: "", address: "", gender: "", program: "", message: "" }
  ]);

  const navigate = useNavigate();

  const addStudent = () => {
    setStudents([...students, { name: "", email: "", phone: "", dob: "", address: "", gender: "", program: "", message: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    students.forEach(student => {
      const formData = new FormData();
      formData.append("name", student.name);
      formData.append("email", student.email);
      formData.append("phone", student.phone);
      formData.append("dob", student.dob);
      formData.append("address", student.address);
      formData.append("gender", student.gender);
      formData.append("program", student.program);
      formData.append("message", student.message);

      fetch("http://localhost/Y2/apireactstudent/api/register_student.php", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });  

    navigate('/');
  };

  const handleInputChange = (index, event) => {
    const newStudents = [...students];
    newStudents[index][event.target.name] = event.target.value;
    setStudents(newStudents);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-12 px-6 flex-grow flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
          Student Registration
        </h1>
        <form className="space-y-8 w-full sm:w-4/5 md:w-3/4  p-8 bg-gray-800 rounded-lg shadow-2xl border border-gray-600 transition-all duration-300 ease-in-out hover:shadow-xl" onSubmit={handleSubmit}>
          {students.map((student, index) => (
            <div key={index} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={(e) => handleInputChange(index, e)}
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={(e) => handleInputChange(index, e)}
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter Email"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={student.phone}
                  onChange={(e) => handleInputChange(index, e)}
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={student.dob}
                  onChange={(e) => handleInputChange(index, e)}
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={student.address}
                  onChange={(e) => handleInputChange(index, e)}
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter Address"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Gender:</label>
                <select
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  name="gender"
                  value={student.gender}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Program of Interest:</label>
                <select
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  name="program"
                  value={student.program}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <option value="">Select Program</option>
                  <option value="english-computer">English and Computer</option>
                  <option value="associate-degree">Associate Degree</option>
                  <option value="bachelor-degree">Bachelor Degree</option>
                  <option value="masters-degree">Master's Degree</option>
                  <option value="doctoral-degree">Doctoral Degree</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xl font-semibold">Message:</label>
                <textarea
                  className="col-span-2 p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  name="message"
                  value={student.message}
                  onChange={(e) => handleInputChange(index, e)}
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              {index < students.length - 1 && <hr className="border-gray-600 my-6" />}
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={addStudent}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition duration-200 ease-in-out"
            >
              Add Another Student
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Register All Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;