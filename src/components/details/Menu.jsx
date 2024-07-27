import React from 'react';

const data = [
  {
    day: "Day1",
    meals: {
      breakfast: ["Bread Butter Jam", "Live Tea - Cardamom", "Masala Uttapam", "Milk", "Onion & Tomato"],
      lunch: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"],
      evening: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"],
      dinner: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"]
    }
  },
  {
    day: "Day2",
    meals: {
      breakfast: ["Bread Butter Jam", "Live Tea - Cardamom", "Masala Uttapam", "Milk", "Onion & Tomato"],
      lunch: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"],
      evening: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"],
      dinner: ["Chapati", "Cucumber Raita", "Dal-Fry", "Green Salad", "Plain Rice"]
    }
  },
  // ...similar objects for Day3 to Day7
];

const MenuTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-300">Day</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-300">Breakfast</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-300">Lunch</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-300">Evening</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Dinner</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((dayData, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">{dayData.day}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">{dayData.meals.breakfast.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">{dayData.meals.lunch.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">{dayData.meals.evening.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dayData.meals.dinner.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
