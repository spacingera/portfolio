import React from 'react'
import profileData from '../data/profileData'

export default function About(){
  const { about, education, certifications } = profileData
  return (
    <section className="p-10 bg-white shadow rounded-lg my-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 mb-6">{about}</p>
      <h3 className="text-2xl font-semibold mt-6">Education</h3>
      <p className="text-gray-700">{education.degree} ({education.duration}) – {education.institution}</p>
      <h3 className="text-2xl font-semibold mt-6">Certifications</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {certifications.map(c => <li key={c}>{c}</li>)}
      </ul>
    </section>
  )
}
