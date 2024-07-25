// const InputBox = ({ label, placeholder, onChange, name, type}) => {
//   return (
//     <div>
//       <div className="text-sm font-medium text-left py-2">
//         <label htmlFor={name}>{label}</label>
//       </div>
//       <input
//         id={name}
//         type={type}
//         name={name}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full px-2 py-1 border rounded border-slate-200"
//       />
//     </div>
//   );
// };

// export default InputBox;

const InputBox = ({ onChange, name, label, placeholder, value, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm p-2"
      />
    </div>
  );
};

export default InputBox;

