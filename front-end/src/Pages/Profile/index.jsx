import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Select from 'react-select'
import ReactCountryFlag from 'react-country-flag'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const countries = [
    { value: 'Iran', label: 'Iran', code: 'IR' },
    { value: 'USA', label: 'USA', code: 'US' },
    { value: 'Canada', label: 'Canada', code: 'CA' },
    { value: 'Australia', label: 'Australia', code: 'AU' },
    { value: 'Germany', label: 'Germany', code: 'DE' },
    { value: 'Italy', label: 'Italy', code: 'IT' },
    { value: 'France', label: 'France', code: 'FR' },
    { value: 'Finland', label: 'Finland', code: 'FI' },
    { value: 'Denmark', label: 'Denmark', code: 'DK' },
    { value: 'Netherlands', label: 'Netherlands', code: 'NL' },
  ]

  const savedProfile = JSON.parse(localStorage.getItem('profile') || '{}')

  const [name, setName] = useState(savedProfile.name || '')
  const [lastName, setLastName] = useState(savedProfile.lastName || '')
  const [phone, setPhone] = useState(savedProfile.phone || '')
  const [country, setCountry] = useState(
    countries.find((item) => item.label === savedProfile.country) || null
  )

  const navigate = useNavigate()

  const saveProfile = () => {
    const profile = {
      name,
      lastName,
      phone,
      country: country?.label || ''
    }
    localStorage.setItem('profile', JSON.stringify(profile))
    navigate('/complete-profile')
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-neutral/30 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white border border-neutral rounded-xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold text-primary text-center mb-2">
            Complete Your Profile
          </h2>

          <p className="text-secondary text-center mb-6">
            Manage your personal information
          </p>

          <div className="flex flex-col gap-4">

            <div>
              <label className="block text-primary mb-2">
                First Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full border border-muted rounded-lg p-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-primary mb-2">
                Last Name
              </label>

              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full border border-muted rounded-lg p-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-primary mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full border border-muted rounded-lg p-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-primary mb-2">Country</label>

              <Select
                options={countries}
                value={country}
                onChange={setCountry}
                placeholder="Select your country"
                formatOptionLabel={(item) => (
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={item.code}
                      svg
                      style={{ width: '24px', height: '18px' }}/>

                    <span>{item.label}</span>
                  </div>
                )}
              />
            </div>
            <button onClick={saveProfile} className="block w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition mt-2">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  )
}
