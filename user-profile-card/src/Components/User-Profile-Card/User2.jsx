import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../Assets/Dp-bbx.jpg"

export const UserProfileCardTwo = () => {
  return (
    <div className='upc'>
       <div className="gradiant"></div>
       <div className="profile-down">
          <img src={profile_icon} alt="" />
          <div className="profile-title">Syed Mohammad Ashar</div>
          <div className="rpfile-description">
          Versatile Software Developer proficient in HTML, CSS, JavaScript, and React. Blend of creativity and analytical skills,
           delivering visually appealing and intuitive web interfaces. Thrives in dynamic, 
           team-driven environments with a keen eye for detail.
          </div>
          <div className="profile-button">
            <a href="mailto:abdazhar786@gmail.com">Contact Me</a>
          </div>
       </div>
    </div>
  )
}