
import React from 'react'
import Navbar from '../../Components/Navbar'

export default function CompletedProfile() {

  const profile = JSON.parse(localStorage.getItem('profile') || '{}')

  const { name, lastName, phone, country } = profile

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-neutral/30 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white border border-neutral rounded-xl p-6">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">Complete Profil</h2>
          <div className="flex flex-col gap-4">
            <p className="bg-neutral/30 text-primary p-3 rounded-lg">First Name: {name}</p>
            <p className="bg-neutral/30 text-primary p-3 rounded-lg">Last Name: {lastName}</p>
            <p className="bg-neutral/30 text-primary p-3 rounded-lg">Phone Number: {phone}</p>
            <p className="bg-neutral/30 text-primary p-3 rounded-lg">Country: {country}</p>
          </div>
        </div>
      </div>
    </>
  )
}
