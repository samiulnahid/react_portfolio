import React, {useEffect,useRef} from 'react'
import { init } from 'ityped'
import "./profile.css"
import myimg from "./../../assets/3cake.jpg"



const Profile = () => {

    const textRef = useRef();

    useEffect(() => {
        
      init(textRef.current, { 
          showCursor: false,
           strings: ['Developer', 'Frontend devevloper','designer' ] })
    }, [])

    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="#">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                       <span className="primary-text">
                             {" "}
                             hello, I'M <span className="highlighted-text">Samiul</span>
                      </span>

                     </div>
                     <div className="profile-details-role">
                         <span  className="primary-text">
                             
                             <h1 ref={textRef} style={{height:"50px"}}>
                                   
                             </h1>
                             <span className="profile-role-tagline">
                                    lorem23 Copyright C Microsoft Corporation. All rights reserved.
                             </span>
                         </span>
                     </div>
                     <div className="profile-optins">
                         <button className="btn btn-primary m-4">
                             {""}
                             Hire Me{" "}
                         </button>
                         <a href="#" download="Ehiedu kjjh.pdf">
                             <button className="btn " style={{backgroundColor:"#fdb211",color:"white" }}>get resume</button>
                         </a>
                     </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                       

                            {/* <img src={myimg} style={{ width: "300px", height: "300px"}}/> */}
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
