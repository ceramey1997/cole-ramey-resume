import React from 'react'

function WorkExperience() {
    return (
        <div className='work-experience'>
            <h1 className="label">Experience</h1>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">R&D Systems Engineer</p>
                    <p className='time'>2019-08 to Present</p>
                </div>
                <div className="individual-information">
                    <p className='location'>SiO2 Medical Products - Auburn, Al</p>
                    <ul>
                        <li>Create data analytics software for lab use as well as organizational software that keeps track of lab equipment stock as well as current testing in the lab.</li>
                        <li>Development of Operations-Management software for all SiO2 Products that tracks product from molding to shipping. The Program gives detailed reports for management to create value stream maps, and other metrics tracking.</li>
                        <li>Write and perform instrument validations for various lab equipment that includes, but is not limited to an ICP-OES, and FT-IR microscope, LO (Light Obscuration) particulate counter, and MOON OpTech.</li>
                        <li>Develop Test Method procedures as well as documentation of experimental procedures.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Software Engineering Co-op</p>
                    <p className='time'>2018-01 to 2019-06</p>
                </div>
                <div className="individual-information">
                    <p className='location'>ADTRAN, Inc. - Huntsville, Al</p>
                    <ul>
                        <li>Experience with Openstack, Artifactory, and Jenkins and using them in automation etc.</li>
                        <li>Developed an extensive database that kept track of bills and other patent information for Adtran's patents.</li>
                        <li>Write and develop simple software programs to enable other developers to work quicker.</li>
                        <li>Debug and fix issues in large code bases</li>
                        <li>Collaborating with a team for design discussions to come up with solutions for software issues.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Labratory Technition</p>
                    <p className="time">2016-01 to 2017-12</p>
                </div>
                <div className="individual-information">
                    <p className="location">SiO2 Medical Products - Auburn, Al</p>
                    <ul>
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
