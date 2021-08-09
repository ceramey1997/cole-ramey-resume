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
                    <p className='location'>SiO2 Material Sciences - Auburn, AL</p>
                    <ul>
                        <li>Create data analytics software for lab use as well as organizational software that keeps track of lab equipment stock as well as current testing in the lab.</li>
                        <li>Development of Operations-Management software for all SiO2 Products that tracks product from molding to shipping. The Program gives detailed reports for management to create value stream maps, and other metrics tracking.</li>
                        <li>Work with quality engineers to cultivate design inputs and design outputs based on customer specifications, and develop testing procedures and validations based on the DI’s and DO’s.</li>
                        <li>Develop test method procedures based on industry standard ISO documents.</li>
                        <li>Perform and document experimental procedures in technical reports.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Software Engineering Co-op</p>
                    <p className='time'>2018-01 to 2019-06</p>
                </div>
                <div className="individual-information">
                    <p className='location'>ADTRAN, Inc. - Huntsville, AL</p>
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
                    <p className="individual-title">Labratory Technician</p>
                    <p className="time">2016-01 to 2017-12</p>
                </div>
                <div className="individual-information">
                    <p className="location">SiO2 Medical Products - Auburn, AL</p>
                    <ul>
                        <li>Write and perform instrument validations for various lab equipment  that includes, but is not limited to an ICP-OES, and FT-IR microscope, LO (Light Obscuration) particulate counter, and MOCON OpTech.</li>
                        <li>Perform routine technical tasks and experiments to support research and development investigations.</li>
                        <li>Worked apart of a healthy team environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
