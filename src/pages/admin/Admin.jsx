/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="p-8 bg-gray-200 min-h-screen ">
      <h1 className="text-2xl font-bold mb-6">Dash Board</h1>
      
      {/* Management Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">User Management</h2>
          <p className="text-sm text-gray-500">Last 30 days</p>
          <p className="text-3xl font-bold mt-2">4587</p>
          <p className="text-sm text-green-500">+1.5% per day</p>
        </div>
        
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Property Management</h2>
          <p className="text-sm text-gray-500">Last 30 days</p>
          <p className="text-3xl font-bold mt-2">3500</p>
          <p className="text-sm text-green-500">+2.5% per day</p>
        </div>
        
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Booking Management</h2>
          <p className="text-sm text-gray-500">New Booking Added</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Booking</button>
        </div>
        
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">AI-Powered Analytics</h2>
          <p className="text-sm text-gray-500">Last 30 days</p>
          <p className="text-3xl font-bold mt-2">4587</p>
          <p className="text-sm text-green-500">+1.5% per day</p>
        </div>
      </div>
      
      {/* Settings */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">User Management</h3>
          <Link to={"/admin/usermanagement"}> <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Manage users</button></Link>
          </div>
          
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Property Management</h3>
          <Link to={"/admin/propertymanagement"}><button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add property</button></Link>
          </div>
          
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">AI-Powered Analytics</h3>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Analyze</button>
          </div>
        </div>
      </div>
      
      {/* Recent Booking */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Recent Booking</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Hostel Name</th>
              <th className="py-2 px-4 border-b">Bed type</th>
              <th className="py-2 px-4 border-b">Facility type</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Patient Monitoring Networks', bed: 'INVOS 5100', facility: 'wxy-90', status: 'orange' },
              { name: 'Respiratory', bed: 'INVOS 5100', facility: 'wxy-90', status: 'red' },
              { name: 'Respiratory', bed: 'SERVO U', facility: 'wxy-90', status: 'green' },
            ].map((booking, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{booking.name}</td>
                <td className="py-2 px-4 border-b">{booking.bed}</td>
                <td className="py-2 px-4 border-b">{booking.facility}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`inline-block w-4 h-4 rounded-full bg-${booking.status}-500`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">View</button>
      </div>
    </div>
  );
};

export default Admin;
