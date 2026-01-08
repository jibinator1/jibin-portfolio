import './AboutMe.css';
import React, { useRef } from 'react';

function AboutMe() {
    const aboutMeRef = useRef(null);
    return (
        <div ref={aboutMeRef} id="aboutMe">
            <div className="about-Me">
                About Me
            </div>
            <div className="description">
                <p><strong>My name is Jibin Im</strong>, a third-year Data Science student.</p>
                <p>I possess a strong command of various programming languages, including Python, Java, R, SQL, VBA, JavaScript, C, and HTML/CSS.</p>
                <p>My technical expertise extends to data-driven Python libraries such as Pandas, NumPy, Seaborn, and PySpark.</p>
                <p>Additionally, I am highly skilled in industry tools like Power BI, Visual Studio Code, and the complete Microsoft Office Suite.</p>
            </div>
        </div>
    );
}

export default AboutMe;
