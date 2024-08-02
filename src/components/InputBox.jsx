/* eslint-disable react/prop-types */
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

const InputBox = ({ onChange, name, label, placeholder, value, className ,type='text', refT }) => {
  return (
    <div className={`w-full my-5  ${className}`}>
      <div className=" w-full flex justify-start">
    <label className=" text-sm font-medium text-gray-700 mb-1">{label}</label></div>
    <input
    required = {true}
      type={type}
      name={name}
      ref={refT}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full text-sm text-gray-900  border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm p-2"
    />
  </div>
  
  );
};

export default InputBox;

