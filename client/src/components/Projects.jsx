import React from 'react'
import profileData from '../data/profileData'

export default function Projects(){
  return (
    <section id="projects" className="p-10 bg-white shadow rounded-lg my-8">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      {profileData.projects.map(p => (
        <div key={p.name} className="mb-6">
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-gray-700">{p.description}</p>
          <p className="text-gray-600 text-sm mt-2">Tools: {p.tools.join(', ')}</p>
        </div>
      ))}
    </section>
  )
}
