import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Store/Slices/authSlice';
import Navbar from '../../Components/Navbar';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormValid = user.trim() !== '' && password.trim() !== '';
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        dispatch(login({ user, token: data.token }));
        navigate('/');
      } else {
        setError('نام کاربری یا رمز عبور اشتباه است');
      }
    } catch (error) {
      setError('خطا در اتصال. دوباره تلاش کنید.');
    }
  };
  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center bg-neutral px-4"dir="rtl">
        <form onSubmit={handleLogin} className="w-full max-w-[350px] rounded-xl bg-white p-6 shadow-md flex flex-col gap-5 border border-muted">
          <h2 className="text-2xl font-bold text-primary text-center">Login</h2>
          <h3 className='mb-[-20px] mt-7 mr-1.5'>نام کاربری را وارد کنید.</h3>
          <input className="w-full  rounded-lg border border-muted px-3 py-3 text-primary outline-none focus:border-secondary transition" value={user} onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Enter Username"/>
          <h3 className='mb-[-20px] mt-7 mr-1.5'>گذرواژه را وارد کنید.</h3>
          <input className="w-full rounded-lg border border-muted px-3 py-3 text-primary outline-none focus:border-secondary transition" value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"/>
          {error && (<p className="text-red-500 text-sm text-center">{error}</p>)}
          <button type="submit" disabled={!isFormValid} className="w-full rounded-lg bg-primary py-3 text-white font-medium transition hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary">Login</button>
        </form>
      </div>
    </>
  );
}