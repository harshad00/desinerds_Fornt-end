const InputBox = ({ label, placeholder, onChange, name, type}) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        id={name}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
};

export default InputBox;
