import React from 'react';
const data = [
    { id: 1, name: 'Alice Johnson', address: '456 Elm St', email: 'alice.johnson@example.com', phone: '9876543210', role: 'admin', active: true },
    { id: 2, name: 'Bob Smith', address: '789 Oak St', email: 'bob.smith@example.com', phone: '1234567890', role: 'user', active: false },
    { id: 3, name: 'Charlie Brown', address: '101 Pine St', email: 'charlie.brown@example.com', phone: '2345678901', role: 'user', active: true },
    { id: 4, name: 'Diana Prince', address: '202 Maple St', email: 'diana.prince@example.com', phone: '3456789012', role: 'admin', active: true },
  ];

const UserManage = () => {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Active</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.address}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.phone}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.active ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4">
                <button 
                  onClick={() => console.log(`Edit ${user.id}`)} 
                  className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => console.log(`Delete ${user.id}`)} 
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManage;
