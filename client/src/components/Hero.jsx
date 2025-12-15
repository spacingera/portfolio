import React from 'react'
import profileData from '../data/profileData'

export default function Hero(){
  return (
    <section id="home" className="bg-gray-100 py-12 px-6 text-center rounded-lg">
      <img
        src={profileData.profileImage}
        alt={profileData.name}
        className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold mt-6">{profileData.name}</h1>
      <p className="text-xl text-gray-600 mt-2">{profileData.title}</p>
      <p className="max-w-3xl mx-auto mt-6 text-gray-700">{profileData.objective}</p>
    </section>
  )
}
