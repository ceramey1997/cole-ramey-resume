import React from 'react'

function Education() {
    return (
        <div className='education'>
            <h1 className="label">Education</h1>
            <div className="single-school">
                <div className="individual-header">
                    <p className="individual-title">Bachelor of Software Engineering</p>
                    <p className='time'>2017-08 to present</p>
                </div>
                <div className="individual-information">
                    <p className='location'>Auburn University - Auburn, Al</p>
                </div>
            </div>
            {/*<div className="single-school">
                <div className="individual-header">
                    <p className="individual-title">Associates in Science</p>
                    <p className="time">2016-01 to 2017-05</p>
                </div>
                <div className="individual-information">
                    <p className='location'>Southern Union State Community College - Opelika, Al</p>
                </div>
            </div>*/}
        </div>
    )
}

export default Education
