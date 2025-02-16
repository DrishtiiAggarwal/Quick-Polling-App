"use client";
import React, { useState } from "react";
import Image from "next/image";

function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-zinc-900 flex text-black justify-center items-center h-screen font-Montserrat">
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 py-10 flex flex-col items-center gap-4 shadow-lg w-96">
        <Image src="/poll.png" alt="Logo" height={50} width={50} />
        <div className="text-gray-300 font-normal text-[28px]">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </div>
        <p className="text-gray-300 text-sm">
          Hey <span className="font-semibold">mate</span>, Please enter your
          details
        </p>

        <div className=" bg-zinc-700 rounded-lg p-1 flex w-full justify-center gap-2 mt-4">
          <button
            className={`px-4 py-2 rounded-lg text-gray-300 w-1/2 ${
              isLogin ? "bg-zinc-500" : "bg-zinc-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-gray-300 w-1/2 ${
              !isLogin ? "bg-zinc-500" : "bg-zinc-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="flex flex-col items-center p-2 my-4 gap-6 text-gray-400 w-full">
          <input
            className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
            placeholder="Email / Username"
          />
          {!isLogin && (
            <input
              className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
              placeholder="Username"
            />
          )}
          <input
            className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
            placeholder="Password"
            type="password"
          />
          <button className="bg-zinc-50 hover:bg-zinc-500 mt-2 text-zinc-900 text-[15px] font-semibold rounded-lg py-3 px-12 w-full">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
