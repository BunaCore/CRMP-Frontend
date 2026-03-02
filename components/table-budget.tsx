"use client";

import React from "react";

export default function Table({ data = [] }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-200">
      <table className="w-full table-fixed border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="w-1/5 py-4 px-6 text-center font-medium text-gray-700">Name</th>
            <th className="w-1/5 py-4 px-6 text-center font-medium text-gray-700">Role</th>
            <th className="w-1/5 py-4 px-6 text-center font-medium text-gray-700">Department</th>
            <th className="w-1/5 py-4 px-6 text-center font-medium text-gray-700">Email</th>
            <th className="w-1/5 py-4 px-6 text-center font-medium text-gray-700">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-center">{item.name}</td>
                <td className="py-4 px-6 text-center">{item.role}</td>
                <td className="py-4 px-6 text-center">{item.department}</td>
                <td className="py-4 px-6 text-center">{item.email}</td>
                <td className="py-4 px-6 text-center">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-6 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}