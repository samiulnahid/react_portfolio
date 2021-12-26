import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {

     const onClick=()=>{
        setMenuOpen(!menuOpen)
    }


    return (
        <div className={menuOpen ? "menu active" : "menu" }>
            <ul>
                <li onClick={onClick}>
                    <a href="#intro">Home </a>
                </li>
                <li onClick={onClick}>
                    <a href="#portfolio">Portfolio </a>
                </li>
                <li onClick={onClick}>
                    <a href="#work"> Works </a>
                </li>
                <li onClick={onClick}>
                    <a href="#testimonial">Testimonial </a>
                </li>
                <li onClick={onClick}>
                    <a href="#contact">Contact </a>
                </li>
            </ul>
        </div>
    )
}
