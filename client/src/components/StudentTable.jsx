import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BsPlusLg } from "react-icons/bs";

const StudentsTable = () => {
  const [selectedCohort, setSelectedCohort] = useState('AY 2024-25');
  const [selectedClass, setSelectedClass] = useState('CBSE 9');

  // Sample student data with course SVGs
  const students = [
    {
      name: 'Anshuman Kashyap',
      cohort: 'AY 2024-25',
      courses: [
        { name: 'CBSE 9 Science', svg: '/science.svg' },
        { name: 'CBSE 9 Math', svg: '/maths.svg' }
      ],
      dateJoined: '17. Nov. 2024',
      lastLogin: '17. Nov. 2024 4:16 PM',
      status: 'active'
    },
    // Add more students as needed
  ];

  return (
    <div className="px-6 py-4 bg-white rounded-lg mt-[81px]">
      {/* Filters Section */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#E9EDF1] rounded-lg text-[#3F526E] font-bold">
          {selectedCohort}
          <IoChevronDown />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#E9EDF1] rounded-lg text-[#3F526E] font-bold">
          {selectedClass}
          <IoChevronDown />
        </button>
        <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#E9EDF1] text-[#3F526E] rounded-lg font-bold ">
          <BsPlusLg />
          Add new Student
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Student Name</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Cohort</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Courses</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Date Joined</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Last login</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-4 px-4">{student.name}</td>
              <td className="py-4 px-4">{student.cohort}</td>
              <td className="py-4 px-4">
                <div className="flex gap-2">
                  {student.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded"
                    >
                      <img
                        src={course.svg}
                        alt={course.name}
                        className="w-6 h-6"
                      />
                      <span className="text-sm">{course.name}</span>
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-4 px-4">{student.dateJoined}</td>
              <td className="py-4 px-4">{student.lastLogin}</td>
              <td className="py-4 px-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
