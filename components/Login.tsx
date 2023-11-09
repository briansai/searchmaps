'use client';

import { SyntheticEvent, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e: { target: HTMLInputElement }) => {
    setEmail(e.target.value);
  };

  return (
    <form className="login border w-2/5">
      <div className="my-6">
        <label className="">
          <div className="block text-sm font-medium text-slate-700">
            Username
          </div>

          <input
            type="text"
            value={email}
            onChange={handleInput}
            placeholder="email"
            className="mt-1 block w-4/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
      </div>
    </form>
  );
};

export default Login;
