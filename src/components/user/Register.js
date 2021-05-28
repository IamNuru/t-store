import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/Context";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register, user, logedin } = authContext;
  // set state
  const [stayLogedIn, setStayLogedIn] = useState(logedin)
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  //destructure state objects
  const { username, password } = credentials;
  //on change of inputs
  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // toggle stay logged in 
  const changeStayLogedInStatus = () =>{
    setStayLogedIn(!stayLogedIn)
  }
  // register new user
  const registerUser = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Fill in your credentials");
    }
    if (user.username === username) {
      alert("Username already taken");
    }
    //setLogin(credentials)
    register(credentials);
  };
  return (
    <div className="p-1 block bg-gray-100 min-h-screen w-full">
      <form
        onSubmit={registerUser}
        className="block rounded-md mt-2 min-h-screen px-4 py-8 w-full m-auto bg-gray-300 md:w-96"
      >
        <h2 className="w-full text-center mt-1 mb-2 font-bold text-2xl">
          Register
        </h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Enter username / email"
          className="pl-2 py-2 mt-2 w-full rounded-full border-1 outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          className="pl-2 py-2 mt-2 w-full rounded-full border-1 outline-none"
        />
        <div className="ml-2 flex mt-2 mb-2">
          <input
            type="checkbox"
            name="checkbox"
            value={stayLogedIn}
            onChange={changeStayLogedInStatus}
            className="pl-2 w-4 rounded-full border-1 outline-none"
          />
          <label className="text-sm pl-2"> Select to stay logged in</label>
        </div>
        <button
          type="submit"
          className="py-1
           mt-4 w-full rounded-full border-1 bg-purple-600
           text-white font-bold text-xl md:w-48 m-auto text-center outline-none"
        >
          Submit
        </button>
        <p className="mt-8 text-center">
          Already registerd?, please{" "}
          <Link to="/login" className="text-purple-800 px-1">
            login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
