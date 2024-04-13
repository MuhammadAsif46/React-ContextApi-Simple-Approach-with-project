import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const submitHandler = (e) => {
    e.preventDefault()
    setUser({username, password})
  };
  return (
    <div className="bg-[#e5989b] p-4 mx-auto flex flex-col">
      <h1 className="text-center text-3xl text-[#6d6875] mb-3">Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="my-2 p-2 rounded-md w-72"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="my-2 p-2 rounded-md w-72"
      />
      <button onClick={submitHandler} className="bg-purple-500 text-white mx-auto px-3 py-1 my-2 rounded-md">Submit</button>
    </div>
  );
};

export default Login;
