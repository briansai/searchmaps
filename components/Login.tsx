'use client';

import { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: { target: HTMLInputElement }) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: { target: HTMLInputElement }) => {
    setPassword(e.target.value);
  };

  return (
    <form className="login border rounded-xl w-2/5 bg-white ">
      <div className="my-10">
        <div className="">
          <label className="block mb-6">
            <input
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="email"
              className="mt-1 block mx-auto w-4/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    "
            />
          </label>
          <label className="block mb-6">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="password"
              className="mt-1 block mx-auto w-4/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    "
            />
          </label>
          <button className="mt-1 block mx-auto w-4/5 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm bg-blue-400 text-white font-bold">
            Login
          </button>
        </div>
        <div className="border-b-2 w-4/5 mx-auto h-6"></div>
        <button className="mt-6 mx-auto w-4/5 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm bg-slate-400 text-white font-bold flex">
          <div className="mx-auto flex">
            <Image src="/google.svg" height={24} width={24} alt="google" />
            <div className="pl-4">Sign In With Google</div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default Login;
