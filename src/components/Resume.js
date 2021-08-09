import React from 'react'
import About from './About'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'

import '../style/resume.css'

function Resume() {
    return (
    <div className="Resume">
      <div className="info">
        <About />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </div>
    )
}

export default Resume