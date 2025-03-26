import React, { useState } from 'react';
import './Projects.css';

const projects = [ //create an image with id and image file location
    { id: 1, image: '/images/bok-chourney.png', name: "Bok Chourney", github: "https://jibinator1.github.io/Bok-Chourney-Weather-App-/index.html" },
    { id: 2, image: '/images/unisear-Front.png', name: "Unisear", github: "https://dorahacks.io/buidl/23043" },
    { id: 3, image: '/images/FASTdemo.png', name: "F.A.S.T", github: "https://github.com/jibinator1/FAST" },
    { id: 4, image: '/images/freecodecamp-data-cert.png', name: "Data Analysis with Python Certificate", github: "https://www.freecodecamp.org/certification/fcccf773034-9030-4623-b6f0-5c505e38edf8/javascript-algorithms-and-data-structures-v8" },
    { id: 5, image: '/images/freecodecamp-js-cert.png', name: "Javascript Algorithms and Data Structures Certificate", github: "https://www.freecodecamp.org/certification/fcccf773034-9030-4623-b6f0-5c505e38edf8/data-analysis-with-python-v7" },
];

function Projects() {
    const [isHovered, setIsHovered] = useState(false); //isHovered is the current state with SetIsHovered is called when we want to change isHovered

    return (
        <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1>My Projects/Certificates</h1>
            <section className="projects-section">
                <div className="projects-container">
                    {projects.map((project) => (//go through each project to do the same div stuff to 
                        <a 
                            key={project.id} 
                            href={project.github} //go to the GitHub link when clicked
                            target="_blank" //open the link in a new tab
                            rel="noopener noreferrer" //security best practice
                            className={`project ${project.id === 4 || project.id === 5 ? 'smaller' : ''}${project.id === 3 ? 'x-smaller' : ''}`} //make the size smaller when id = 4 and 5 (since these are the certificates and have diff sizes)
                        >
                            <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className={`project-image ${isHovered ? 'hovered' : ''}`}//change the css depending on whether the image is being hovered
                                onMouseEnter={() => setIsHovered(true)}//when mouse is within the image, increase the size
                                onMouseLeave={() => setIsHovered(false)}//when mouse is not within the image, decrease the size
                            />
                        </a>
                    ))}
                </div>
            </section>
            
            <div>
                    <h2>PS: You can check out my Data Analysis Projects on my GitHub!</h2>
            </div>
        </div>
        
    );
}

export default Projects;
