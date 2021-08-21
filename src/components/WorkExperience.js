import React from 'react'

function WorkExperience() {
    return (
        <div className='work-experience'>
            <h1 className="label">Experience</h1>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">R&D Systems Engineer</p>
                    <p className='time'>August 2019 - Present</p>
                    <p className='location'>SiO<sub>2</sub> Materials Science - Auburn, AL</p>
                </div>
                <div className="individual-information">
                    <ul>
                        <li>Created data analytics software for lab use as well as organizational software that keeps track of lab equipment stock and current testing in the lab.</li>
                        <li>Developed Operations-Management software for all SiO2 Products to track products from molding to shipping. The Program gives detailed reports for management to create value stream maps and other metrics tracking.</li>
                        <li>Implemented an Agile workflow into the R&D Lab by writing a customized Kanban board specific to the needs of the department due to there being no pre-existing software solutions.</li>
                        <li>Collaborated with quality engineers to cultivate design inputs and design outputs based on customer specification in order to develop testing procedures and validations.</li>
                        <li>Developed test method procedures based on International Organization for Standarization (ISO) documents.</li>
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
                        <li>DevOp's experience using Openstack, Artifactory, and Jenkins for testing automation.</li>
                        <li>Established an extensive database using Python and a Microsoft SQL Server to keep track of bills and other information for Adtran's patents.</li>
                        <li>introduced simple software programs to enable other developers to increase productivity.</li>
                        <li>Converted a large codebase from Python2 to Python3, housed in a GitHub repository, by writing extensive unit tests and providing code reviews.</li>
                        <li>Used Scrum Agile methodology to collaborate on software projects.</li>
                    </ul>
                </div>
            </div>
            <div className="singleJob">
                <div className="individual-header">
                    <p className="individual-title">Labratory Technician</p>
                    <p className="time">January 2016 - December 2017</p>
                    <p className="location">SiO<sub>2</sub> Materials Science - Auburn, AL</p>
                </div>
                <div className="individual-information">
                    <ul>
                        <li>Designed and performed instrument validations for various lab equipment including ICP-OES, FT-IR microscope, LO (Light Obscuration) particulate counter, and MOCON OpTech Oxygen analyzer.</li>
                        <li>Performed routine technical tasks and experiments to support research and development investigations.</li>
                        <li>Engaged in team projects to create an efficent work environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
