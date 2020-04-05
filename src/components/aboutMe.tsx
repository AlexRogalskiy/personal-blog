import React from 'react'
import profile_picture from '../assets/profile_picture.jpg';

type AboutMeProptypes = {
  name: string;
  description: string;
  twitterHandle: string;
}

export const AboutMe = ({ name, description, twitterHandle }: AboutMeProptypes): JSX.Element => (
  <div>
    <div className="aboutMe-container">
      <div className="aboutMe-container__img">
        <img
          className="profilePicture"
          src={profile_picture}
          alt="about me"
        />
      </div>
      <div className="aboutMe-container__bio">
        <h4>Personal blog by <a href={`https://www.twitter.com/${twitterHandle}`}>{name}</a></h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
)

