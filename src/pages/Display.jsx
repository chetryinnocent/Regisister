import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Display = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student data from PHP script
    axios.get("http://localhost/Y2/apireactstudent/api/fetch_students.php")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Delete student record by calling delete_student.php API
    axios.get(`http://localhost/Y2/apireactstudent/api/delete_student.php?id=${id}`)
      .then((response) => {
        console.log(response.data.message);
        // Remove the deleted student from the state
        setStudents(students.filter(student => student.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the student!", error);
      });
  };

  const handleEdit = (student) => {
    navigate("/edit", { state: { student } }); // Pass the student data to the Edit page
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><h2 className="text-2xl">Loading...</h2></div>;

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-3 px-6 flex-grow flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
          Student List
        </h1>
        <div className="w-full max-w-4xl">
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">ID</th>
                <th className="py-2 px-4 border-b border-gray-700">Name</th>
                <th className="py-2 px-4 border-b border-gray-700">Email</th>
                <th className="py-2 px-4 border-b border-gray-700">Phone</th>
                <th className="py-2 px-4 border-b border-gray-700">Program of Interest</th>
                <th className="py-2 px-4 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="py-2 px-4 border-b border-gray-700">{student.id}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{student.name}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{student.email}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{student.phone_number}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{student.program_of_interest}</td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-md text-white font-semibold mt-4"
          onClick={() => navigate('/register')}
        >
          Back to Register
        </button>
      </div>
    </div>
  );
};

export default Display;