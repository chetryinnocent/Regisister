import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Edit = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    address: "",
    program_of_interest: "",
    message: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the student data is passed from Display (via state)
    if (location.state && location.state.student) {
      setStudent(location.state.student);
    } else {
      console.error('Student data not found');
    }
  }, [location.state]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the student data before sending
    console.log("Student Data to be updated: ", student);

    // Make sure we send the data to the API correctly
    axios.post("http://localhost/Y2/apireactstudent/api/update_student.php", student)
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message); // Show the message from the API response
        navigate("/display"); // Redirect to the display page after successful update
      })
      .catch((error) => {
        console.error("There was an error updating the student!", error);
        alert("Error updating student"); // Alert on error
      });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-3 px-6 flex-grow flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
          Edit Student
        </h1>
        <form className="space-y-5 w-[30rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={student.name} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={student.email} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="phone_number" className="text-lg">Phone Number:</label>
            <input 
              type="tel" 
              name="phone_number" 
              value={student.phone_number} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="date_of_birth" className="text-lg">Date of Birth:</label>
            <input 
              type="date" 
              name="date_of_birth" 
              value={student.date_of_birth} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="address" className="text-lg">Address:</label>
            <input 
              type="text" 
              name="address" 
              value={student.address} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="program_of_interest" className="text-lg">Program of Interest:</label>
            <input 
              type="text" 
              name="program_of_interest" 
              value={student.program_of_interest} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-lg">Message:</label>
            <textarea 
              name="message" 
              value={student.message} 
              onChange={handleChange} 
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gradient-to-r from-blue-400 to-red-500 py-2 px-4 rounded-md text-white font-semibold mt-4"
              type="submit"
            >
              Update Student
            </button>
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-md text-white font-semibold mt-4"
              type="button"
              onClick={() => navigate('/display')}
            >
              Back to Display
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;