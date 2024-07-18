import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(handler);
    };

  }, [filter]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/bulk?filter=" + filter
      );
      setUsers(response.data.allUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="mx-4">
        <div className="font-bold mt-6 text-lg ">Users</div>
        <div className="my-2">
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full px-2 py-1 border rounded border-slate-200"
          ></input>
        </div>
        <div>
          {users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  // const handleClickNavigate = (e)=>{
  //   // navigate("/send?id="+allUser._id+"&name="+allUser.firstName)
  //   navigate("/send")
  // }

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
