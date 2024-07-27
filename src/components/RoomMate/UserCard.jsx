/* eslint-disable react/prop-types */


const UserCard = ({name, age,profession,img}) => {
  
    return (
        <div className="flex items-center p-4">
          <img src={img} alt="Profile" className="w-24 h-24 rounded-full" />
          <div className=" ml-3">
            <h1>Hello {name}</h1>
            <h1>Age: {age}</h1>
            <h1>{profession}</h1>
          </div>
        </div>
      );
}

export default UserCard