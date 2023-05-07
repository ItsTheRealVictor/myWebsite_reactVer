import React from "react"
import "./Home.css"

import GithubIcon from "@mui/icons-material/GitHub"
import LinkedinIcon from "@mui/icons-material/LinkedIn"
import Email from "@mui/icons-material/Email"

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>I am Victor Delgado</h2>
                <div className="prompt">
                    <p>I am a self-taught developer working as an electronics technician. I look
                         for any opportunity to make my life easier with code.</p>
                    <GithubIcon />
                    <LinkedinIcon />
                    <Email />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front End</h2>
                        <span>front front front front front</span>
                    </li>
                    <li className="item">
                        <h2>Back End</h2>
                        <span>back back back back back</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>languages languages languages languages</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
