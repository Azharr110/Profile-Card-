import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../Assets/Dp-cafe.jpg"

export const UserProfileCardThree = () => {
  return (
    <div className='upc'>
       <div className="gradiant"></div>
       <div className="profile-down">
          <img src={profile_icon} alt="" />
          <div className="profile-title">Syed Ashar</div>
          <div className="rpfile-description">
             Creative Software Developer with expertise in HTML, CSS, JavaScript, and React. Detail-oriented team 
             player adept at crafting user-friendly and visually appealing web interfaces. 
             Thrives in fast-paced, collaborative environments.
          </div>
          <div className="profile-button">
            <a href="mailto:abdazhar786@gmail.com">Contact Me</a>
          </div>
       </div>
    </div>
  )
}