import React from 'react'

function WorkExperience() {
    return (
        <div className='work-experience'>
            <h1 className="label">Experience</h1>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">R&D Systems Engineer</p>
                    <p className='time'>August 2019 - Present</p>
                    <p className='location'>SiO<sub>2</sub> Material Sciences - Auburn, AL</p>
                </div>
                <div className="individual-information">
                    <ul>
                        <li>Created data analytics software for lab use as well as organizational software that keeps track of lab equipment stock and current testing in the lab.</li>
                        <li>Developed Operations-Management software for all SiO2 Products to track products from molding to shipping. The Program gives detailed reports for management to create value stream maps and other metrics tracking.</li>
                        <li>Collaborated with quality engineers to cultivate design inputs and design outputs based on customer specification in order to develop testing procedures and validations.</li>
                        <li>Developed test method procedures based on industry standard ISO documents.</li>
                        <li>Performed and documented experimental procedures in technical reports.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Software Engineering Co-op</p>
                    <p className='time'>January 2018 - June 2019</p>
                    <p className='location'>ADTRAN, Inc. - Huntsville, AL</p>
                </div>
                <div className="individual-information">
                    <ul>
                        <li>Experience with Openstack, Artifactory, and Jenkins and using them in automation etc.</li>
                        <li>Established an extensive database that kept track of bills and other information for Adtran's patents.</li>
                        <li>introduced simple software programs to enable other developers to increase productivity.</li>
                        <li>Debugged and wrote unit tests to solve issues in large code bases.</li>
                        <li>Used Scrum Agile methodology to collaborate on software projects.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Labratory Technician</p>
                    <p className="time">2016-01 to 2017-12</p>
                    <p className="location">SiO<sub>2</sub> Medical Products - Auburn, AL</p>
                </div>
                <div className="individual-information">
                    <ul>
                        <li>Wrote and performed instrument validations for various lab equipment including ICP-OES, FT-IR microscope, LO (Light Obscuration) particulate counter, and MOCON OpTech Oxygen analyzer.</li>
                        <li>Performed routine technical tasks and experiments to support research and development investigations.</li>
                        <li>Engaged in team projects to create an efficent work environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
