import React from "react";
const Header = () => {
  return (
    <div className= "sm:pl-16 text-center mt-14 " >
      <h1 className="text-3xl sm:text-4xl py-4 pr-10 sm:pr-0"><span className="opacity-0 sm:opacity-100">I'm</span> Saurabh Chamoli.</h1>
      <p className="text-[#e9c46a] pb-3 0">Full Stack Web Developer.</p>
      <img
        src="https://www.w3schools.com/w3images/man_smoke.jpg"
        alt="profile pic"
        className="w-auto sm:w-[calc(100%-250px)] lg:w-[500px] mx-auto mt-4"
      />
    </div>
  );
};

export default Header;
