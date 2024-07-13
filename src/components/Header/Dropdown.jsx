import { Link } from "react-router-dom";

const Dropdown = ({ items, onClose }) => {
  return (
    <ul className="absolute left-20 mt-0 md:left-0 md:mt-2 w-32 bg-white shadow-lg rounded-md py-1">
      {items.map((item) => (
        <li key={item.name} className="">
          <Link
            to={item.slug}
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;