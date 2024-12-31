import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import Postside from '../../components/Postside/Postside'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide/>
      <Postside/>
      <RightSide/>
      <div className="Rightside">Rightside</div>
    </div>
  )
}

export default Home
