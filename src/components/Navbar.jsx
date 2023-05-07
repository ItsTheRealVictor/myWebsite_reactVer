import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
// import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"
import './Navbar.css'

function Navbar() {
    const [navExpand, setNavExpand] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setNavExpand(false)
    }, [location])

    return (
        <div className="navbar" id={navExpand ? "open" : "closed"}>
            <div className="toggleButton">
                <button onClick={() => setNavExpand(!navExpand)}>
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar
