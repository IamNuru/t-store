import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Footer = (props) => {

    useEffect(() => {
        window.scroll(0,0)
        return () => {
            window.scroll(0,0)
        }
    }, [props])


  return (
    <>
      <div className="sticky bg-black w-full z-50 text-white text-center py-4 text-md">
        This project was built using react and tailwind css with fakeStore Api.{" "}
        <a href="iamnuru.github.io" className="text-red-600">
          Explore
        </a>{" "}
        some of my works. Please consider hiring me if you deem it fit :). Email
        me via{" "}
        <span className="text-purple-800">
          abdulainurudeentitiaka@gmail.com
        </span>
      </div>
    </>
  );
};

export default withRouter(Footer);
