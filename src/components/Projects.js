import React from "react";
import data from "../data";

const Projects = () => {
    return (
        <main>
            <section className="projects-section">
                <h1 className="normal-heading">Projects</h1>
                <p>Here is a section with some of my projects: </p>
                <div className="projects">
                    {
                        data.map(dati => {
                            return (
                                <div className="project">
                                    <img src={dati.imageUrl}/>
                                    <h2>{dati.title}</h2>
                                    <p>{dati.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Projects;