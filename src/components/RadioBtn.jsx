import React from 'react';

const RadioButton = ({ name, value, label, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
