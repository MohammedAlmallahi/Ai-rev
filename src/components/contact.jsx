const contactDetails = [
  {
    title: "Phone",
    text: "+996 546864422",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "malmallahi@MacQueen.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },    
  {
    title: "Office",
    text: "34413, Prince Turkey Street, Khobar 31321, Saudi Arabia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];


import React from 'react'

function Contact() {
  return (
    <section className='app-container p-1' id='contact'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* left -contact side */}
        
        <div>
          <span className='section-subheader'>Get In Touch</span>
          <h2 className='section-header'>Contact Me
          Ready to <span className='gradient-text'>Transform</span> your Buisness with AI?
          </h2>
          <p className='section-text'>Whether you have a question, want to discuss a project, or just want to say hello, I'm here to help. Feel free to reach out to me through any of the contact methods below. I look forward to connecting with you!</p>

          <div className=' mt-8 space-y-4'>
            {contactDetails.map((detail, i) => (
              <div key={i} className='contact-info-group'>
                <div className='form-icon'>{detail.icon}</div>
                  <div>
                  <h3 className='contact-title'>{detail.title}</h3>
                  <p className='contact-text'>{detail.text}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>


        {/* right -contact form side */}
        <div className='bg-white rounded-xl shadow-lg p-6 lg:p-8'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='form-input-label'>Full Name</label>
              <input type='text' id='name' className='form-input' placeholder='Your Name' />
            </div>
            <div>
              <label htmlFor='email' className='form-input-label'>Email Address</label>
              <input type='email' id='email' className='form-input' placeholder='Your Email' />
            </div>
             <div>
              <label htmlFor='subject' className='form-input-label'>Subject</label>
              <input type='text' id='subject' className='form-input' placeholder='Your Subject' />
            </div>
            <div>
              <label htmlFor='message' className='form-input-label'>Message</label>
              <textarea id='message' className='form-input' placeholder='Your Message'></textarea>
            </div>
            <button type='submit' className='btn btn-primary w-full mt-6'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
