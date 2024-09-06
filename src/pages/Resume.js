import React from 'react'
import resume from '../assets/resume.pdf'
import '../styles/Resume.css'

function Resume() {
  return (
    <div className='resumeEmbed'>
      <object data={resume} type="application/pdf">
          <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object>
    </div>
  )
}

export default Resume