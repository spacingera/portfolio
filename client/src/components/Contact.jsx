import React, { useState } from 'react'
import axios from 'axios'
import profileData from '../data/profileData'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)
  const handle = e => setForm({...form, [e.target.name]: e.target.value})
  const submit = async (e) => {
    e.preventDefault()
    try{
      await axios.post(import.meta.env.VITE_API_URL + '/contact', form)
      setStatus('Message sent — thank you!')
      setForm({ name:'', email:'', subject:'', message:'' })
    }catch(err){ setStatus('Error sending message') }
  }

  const { contact, socials } = profileData

  return (
    <section id="contact" className="p-10 bg-gray-50 rounded-lg shadow my-8">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>City: {contact.city}</p>
      <h3 className="text-xl font-semibold mt-6">Send a message</h3>
      <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3 max-w-lg">
        <input name="name" value={form.name} onChange={handle} required placeholder="Your name" className="p-2 border rounded" />
        <input name="email" value={form.email} onChange={handle} required placeholder="Your email" className="p-2 border rounded" />
        <input name="subject" value={form.subject} onChange={handle} placeholder="Subject" className="p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handle} required placeholder="Message" className="p-2 border rounded h-32" />
        <button className="px-4 py-2 bg-slate-800 text-white rounded">Send</button>
        {status && <div className="text-sm mt-2">{status}</div>}
      </form>

      <h3 className="text-xl font-semibold mt-6">Socials</h3>
      <a href={socials.linkedin} className="text-blue-600 underline block mt-2" target="_blank">{socials.linkedin}</a>
    </section>
  )
}
