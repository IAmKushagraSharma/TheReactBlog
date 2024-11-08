import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-40">
      <h1 className="text-6xl text-center font-black">404</h1>
      <p className="text-xl text-center font-semibold">Not Found</p>
      <NavLink
        className="border-4 border-zinc-600 bg-zinc-400 rounded-md px-4 py-1 mx-auto text-sm"
        to="/"
      >
        Go Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
