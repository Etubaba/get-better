"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const searchParams = useSearchParams();

  const error = searchParams.get("error");

  const submit = async () => {
    await signIn("credentials", {
      phone,
      password: pass,
      redirect: true,
      callbackUrl: "/user",
    });
  };
  return (
    <div className="flex justify-center mt-[12rem] items-center">
      <div className=" w-[400px] h-auto rounded-md shadow-md px-4 py-6 ">
        <div className="w-full mb-6">
          <label className="text-black/60 text-sm mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border outline-none rounded-sm"
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="text-black/60 text-sm mb-1">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border outline-none rounded-sm"
            type="text"
          />
        </div>

        <button
          onClick={submit}
          className="px-4 py-1.5 bg-blue-700 text-sm text-white mt-8 rounded-md"
        >
          Send
        </button>

        {!!error && <p className="text-red-700">Error signing in </p>}
      </div>
    </div>
  );
};

export default Login;
