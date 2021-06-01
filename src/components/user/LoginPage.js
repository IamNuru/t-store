import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/Context";

const LoginPage = (props) => {
  const authContext = useContext(AuthContext);
  const { login, users, logedin } = authContext;
  // set state
  const [stayLogedIn, setStayLogedIn] = useState(logedin)
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState('')
  
  useEffect(() => {
    if(logedin){
      props.history.push('/')
    }

    // eslint-disable-next-line
  }, [logedin])

  //destructure state objects
  const { username, password } = credentials;
  //on change of inputs
  const onChange = (e) =>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMsg('')};
  
  // toggle stay logged in 
  const changeStayLogedInStatus = () =>{
    setStayLogedIn(!stayLogedIn)
  }
  // log in the user
  const loginUser = (e) => {
    e.preventDefault();
    const user = users.find(target => target.username === username && target.password === password);
    if (username === "" || password === "") {
      setErrorMsg("Fill in your credentials");
      return false;
    }
    else if (user.username !== username || user.password !== password) {
      setErrorMsg("Invalid credentials");
      return false;
    }
    else if (user.username === username && user.password === password) {
      login();
      var intendedLocation = props.location.state;
      if(intendedLocation === undefined){
        props.history.push('/')
      }else{
        props.history.push(intendedLocation.from.pathname)
      }
    }else{
      setErrorMsg("Authentication Fails. Try again");
      return false;
    }
    //login(credentials, stayLogedIn)
    
    
  };
  return (
    <div className="p-1 block bg-gray-100 h-full w-full">
      <form onSubmit={loginUser} className="block rounded-md mt-2 h-2/3 md:h-2/3 px-4 pt-4 pb-8 w-full m-auto md:mt-24 bg-gray-300 md:w-96">
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
        {
          errorMsg && <span className="text-center text-red-600 text-sm py-2 italic">{errorMsg}</span>
        }
        <p className="text-right py-2 text-purple-700">
          <Link to="/forgotpassword">Forgot Password ?</Link> 
        </p>
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
