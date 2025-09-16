/*
  File: Contact.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: Contact info + interactive form that captures data and redirects to Home
*/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Capture the info (store locally for now)
    const messages = JSON.parse(localStorage.getItem('messages') || '[]')
    messages.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem('messages', JSON.stringify(messages))

    // Redirect back to Home page
    navigate('/')
  }

  return (
    <section className="stack gap">
      <h1>Contact Me</h1>

      {/* Contact panel */}
      <div className="contact-panel">
        <p><strong>Email:</strong> hshukl14@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> (+1) 555-123-4567</p>
        <p><strong>Location:</strong> Toronto, ON</p>
      </div>

      {/* Short interactive form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <label>
            First Name
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </label>
          <label>
            Last Name
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </label>
        </div>

        <div className="row">
          <label>
            Contact Number
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            Email Address
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>

        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
        </label>

        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}
