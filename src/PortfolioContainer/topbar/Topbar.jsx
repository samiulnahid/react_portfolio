import React from 'react'
import './topbar.scss'
import {Person,Mail} from '@material-ui/icons';



const Topbar = ({menuOpen,setMenuOpen}) => {

    const onClick=()=>{
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={menuOpen ? "topbar active" : "topbar" }>
            <div className="wrapper">
                <div className="left">
                     <a href="#intro" className="logo">
                         garva.
                     </a>
                     <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+8801923928323</span>
                     </div>
                     <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>sara@gmail.com</span>
                     </div>
                </div>
               
                <div className="right">

                    <div className="hamburger" onClick={onClick}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
