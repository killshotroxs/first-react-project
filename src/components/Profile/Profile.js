import React from 'react';

import profileicon from '../../Assets/profile-icon.png';

import './Profile.css';

export default function Profile() {
  
  return (
  <div className="profile-container">
    <h1 className= "prtext">Profile</h1>
    <hr color="white"/>
    <h3 class= "intext">Welcome to My Profile</h3>
    <br></br>
    <div>
      <img className="imgpr" src={profileicon} alt="profile picture" />
    </div>
    <p class="att"><strong>Name:</strong>&nbsp;&nbsp;Sandhra Rahardjo&emsp;
    <br></br>
    <strong>Email:&nbsp;</strong>&nbsp;sandhra.rahardjo@binus.ac.id
    <br></br>
    <strong>Internship:&nbsp;</strong>&nbsp;FrontEnd Developer BTPN Jenius</p>
  </div>
  );
}