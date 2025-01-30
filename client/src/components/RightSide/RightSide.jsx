import React, { useState } from 'react'
// import ProfileCard from '../ProfileCard/ProfileCard'
// import FollowersCard from '../FollowersCard/FollowersCard'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModel/ShareModel'
import { Link } from 'react-router-dom'


const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='RightSide'>
      {/* <ProfileCard/>
      <FollowersCard/> */}
      <div className="navIcons">
        <Link to='../home'><img src={Home} alt="" /></Link>
        <UilSetting/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard/>
      <button className="button r-button" onClick={() => setModalOpened(true)}>
      Share
      </button>
      <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        
    </div>
  )
}

export default RightSide
