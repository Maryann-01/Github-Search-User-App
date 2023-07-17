import React from 'react'
import {FaLinkedin,FaTwitter} from "react-icons/fa";
const displayDetails = ({img,userName,bio,blog,linkedin="none",twitter}) => {
  return (
    <div>
        <img src={img}/>
        <div className="userInfo">
           <h3>{userName}</h3>
           <p>{bio}</p>
           {/* <FaPeopleGroup/> */}
           <p>
             <span>
             
             </span>
              <span><a href="followingurl">followers</a></span>.
              <span><a href="followersurl">following</a></span>
           </p>
           <div className='contactDets'>
              {/* <FaLocationDot/> */}Location
              <div className='linkedin'>
                <FaLinkedin/>
                <a href={linkedin}>LinkedIn</a>
              </div>
              <div className='twitter'>
                <FaTwitter/>
                <a href={twitter}>Twitter</a>
              </div>
              <icon>email</icon>
              <githubicon>View Github Profile</githubicon>
           </div>
           <DisplayDetails img={data?.avatar_url } userName={data?.name} bio={data?.bio} linkedin={data?.blog} twitter={data?.twitter_username}/>

        </div>
    </div>
  )
}

export default displayDetails