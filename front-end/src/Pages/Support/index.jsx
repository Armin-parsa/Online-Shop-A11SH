import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

export default function SupportPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const isFormValid =form.name.trim() !== '' &&form.email.trim() !== '' &&form.subject.trim() !== '' &&form.message.trim() !== '';
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  const handleClose = () => {
    setSent(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-10 px-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2"> پشتیبانی</h1>
        <p className="text-gray-500 text-sm text-center mb-8">  سوال یا مشکلی داری؟ فرم زیر رو پر کن.</p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">نام</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="نام خود را وارد کنید" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary"/>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">ایمیل</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary"/>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">موضوع</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="موضوع پیام" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary"/>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">پیام</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="متن پیام خود را بنویسید..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary resize-none"/>
          </div>
          <button disabled={!isFormValid} type="submit" className="w-full bg-primary text-white py-3 rounded-xl  hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"> ارسال پیام</button>
        </form>
      </div>
      {sent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-xl">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">پیام شما ارسال شد!</h2>
            <p className="text-gray-500 text-sm mb-6">به‌زودی با شما تماس می‌گیریم.</p>
            <button onClick={handleClose} className="bg-primary text-white px-6 py-2.5 rounded-xl hover:opacity-90 transition"> بستن</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}