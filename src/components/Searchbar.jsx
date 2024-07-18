import { useRef } from "react"

const Searchbar = () => {
    const searchRef=useRef(null);
    return (
    <div >
    <input ref={searchRef}  placeholder="Search Places here" type="text"
     className="border-2 border-purple-600 rounded-lg p-1 focus:outline-none  mx-1"
     />
     <button className="text-white bg-violet-600 py-1 px-2 rounded-xl">Search</button>
    </div>
  )
}

export default Searchbar