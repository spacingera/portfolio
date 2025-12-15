import React from 'react'
import profileData from '../data/profileData'

export default function Skills(){
  return (
    <section id="skills" className="p-10 bg-gray-50 my-8 rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <h3 className="text-xl font-semibold">Technical Skills</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        {profileData.skills.technical.map(s => <li key={s}>{s}</li>)}
      </ul>
      <h3 className="text-xl font-semibold">Soft Skills</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {profileData.skills.soft.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
