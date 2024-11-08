import React from "react";

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="bg-sky-900 p-4 ">
        <h1 className="text-4xl font-black">Welcome to TheReactBlog</h1>
        <p>Continue to blog page to see the list of all blogs</p>
      </div>
      <div className="overflow-hidden flex justify-center">
        <img
          className="opacity-50"
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.gif"
          alt="❄"
          width="512"
          height="512"
        />
      </div>
    </div>
  );
};

export default HomePage;
