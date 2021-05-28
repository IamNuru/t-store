import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/Context";

const LoginPage = (props) => {
  const authContext = useContext(AuthContext);
  const { login, user, logedin } = authContext;
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
  // log in the user
  const loginUser = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Fill in your credentials");
      return false;
    }
    if (user.username !== username) {
      alert("Invalid credentials");
      return false;
    }
    //login(credentials, stayLogedIn)
    login();

    var intendedLocation = props.location.state;
    if(intendedLocation === undefined){
      props.history.push('/')
    }else{
      props.history.push(intendedLocation.from.pathname)
    }
    
  };
  return (
    <div className="p-1 block bg-gray-100 min-h-screen w-full">
      <form onSubmit={loginUser} className="block rounded-md mt-2 min-h-screen px-4 py-8 w-full m-auto bg-gray-300 md:w-96">
        <h2 className="w-full text-center mt-1 mb-2 font-bold text-xl">
        Login
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
          className="py-1 mt-4 w-full rounded-full border-1 bg-purple-600
           text-white font-bold text-xl md:w-48 m-auto text-center"
        >
          Login
        </button>
      <p className="mt-8 text-center">
        A new member?, please{" "}
        <Link to="/register" className="text-purple-800 px-1 outline-none">
          register
        </Link>{" "}
      </p>
      </form>
    </div>
  );
};

export default LoginPage;