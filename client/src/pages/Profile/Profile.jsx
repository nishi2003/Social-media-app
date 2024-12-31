import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Postside from '../../components/Postside/Postside'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>

      <div className="Profile-Center">
        <ProfileCard/>
        <Postside/>       
      </div>

      <RightSide/>
    </div>
  )
}

export default Profile
