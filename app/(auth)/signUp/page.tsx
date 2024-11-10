import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <div className="min-h-[70%] flex-col gap-y-20 flex justify-center items-center">
      <Link href={"/"}>
        <button className="absolute top-8 right-10 px-4 py-2 bg-[#1f4c83] text-white rounded-md">
          Home
        </button>
      </Link>
      <h1 className="text-4xl font-extrabold text-[#1f4c83]">Sign Up</h1>
      <div className="min-w-[600px] p-10 min-h-72 shadow-2xl flex gap-y-6  flex-col">
        <label htmlFor="Name">Name</label>
        <input
          className="w-full p-3 border border-gray-600 rounded-md"
          type="text"
          name="Name"
          placeholder="Name"
          required
          id=""
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="w-full p-3 border border-gray-600 rounded-md"
          type="text"
          name="email"
          placeholder="Email Address"
          required
          id=""
        />
        <div className="flex gap-x-4">
          <h3>allready have an account ?</h3>
          <Link href={"/signIn"}>
            <button className="px-3 py-1 bg-[#1f4c83] text-white rounded-md">
              SignIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
