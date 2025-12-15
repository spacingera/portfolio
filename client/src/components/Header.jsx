import React from 'react'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Akshat Rana</div>
        <nav className="space-x-4 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
