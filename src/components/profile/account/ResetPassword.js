import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/Context";

const ResetPassword = (props) => {
  const authContext = useContext(AuthContext);
  const { user, logedin, updatePassword } = authContext;
  // set state
  const [credentials, setCredentials] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!logedin) {
      props.history.push("/login");
    }

    // eslint-disable-next-line
  }, [logedin]);

  //destructure state objects
  const { password, newPassword, confirmNewPassword } = credentials;
  //on change of inputs
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  // Change Password
  const changePassword = (e) => {
    e.preventDefault();
    
    if (password === "" || newPassword === "" || confirmNewPassword === "") {
      setErrorMsg("Fill in all fields");
      return false;
    }else if (user.password !== password) {
      setErrorMsg(`You've Entered a wrong password`);
    } else if (user.password === password) {
      //setLogin(credentials)
      updatePassword(credentials);
      props.history.push('/account')
    } else {
      setErrorMsg("The information provided are incorrect");
    }
  };


  return (
    <div className="p-1 block bg-gray-100 min-h-96 w-full">
      <form
        onSubmit={changePassword}
        className="block rounded-md mt-2 h-full px-4 pt-4 pb-8 w-full m-auto bg-gray-300 md:w-96"
      >
        <h2 className="w-full text-center mt-1 mb-2 font-bold text-2xl">
          Reset Password
        </h2>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          autoComplete='off'
          placeholder="Enter existing password"
          className="pl-2 py-2 mt-2 w-full rounded-full border-1 outline-none"
        />
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={onChange}
          placeholder="Enter New Password"
          className="pl-2 py-2 mt-2 w-full rounded-full border-1 outline-none"
          autoComplete='off'
        />
        <input
          type="password"
          name="confirmNewPassword"
          value={confirmNewPassword}
          placeholder={'confirm new password'}
          onChange={onChange}
          className="pl-2 py-2 mt-2 w-full rounded-full border-1 outline-none"
        />
        {errorMsg && (
          <p className="text-center text-red-600 text-sm py-2 italic">
            {errorMsg}
          </p>
        )}
        <p className="text-right py-2 text-purple-700">
          <Link to="/forgotpassword">Forgot Password ?</Link>
        </p>
        <button
          type="submit"
          className="py-1
           mt-4 w-full rounded-full border-1 bg-purple-600
           text-white font-bold text-xl md:w-48 m-auto text-center outline-none"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
