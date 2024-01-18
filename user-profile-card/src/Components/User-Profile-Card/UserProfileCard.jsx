import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../Assets/DP-Rumi gate.jpeg"

export const UserProfileCard = () => {
  return (
    <div className='upc'>
       <div className="gradiant"></div>
       <div className="profile-down">
          <img src={profile_icon} alt="" />
          <div className="profile-title">Azhar Mustafa</div>
          <div className="rpfile-description">
          As a creative and analytical Software Developer, I possess excellent HTML, CSS, JavaScript, and React
knowledge and skills. With an eye for detail and a team-player mentality, I excel at developing user-friendly
and visually appealing web interfaces and thrive in fast-paced, team-driven environments.
          </div>
          <div className="profile-button">
            <a href="mailto:abdazhar786@gmail.com">Contact Me</a>
          </div>
       </div>
    </div>
  )
}
