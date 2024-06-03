import { useEffect, useState } from 'react';
import downloadAvatar from '../../utils/downloadAvatar';
import './Avatar.css'
import axios from 'axios';

const Avatar = ({username,inputValueLength}) => {

const [avatarUrl,setAvatarUrl] = useState(null);
const [profileUrl, setProfileUrl] = useState(null);

async function fetchData() {
  // console.log(`input length : ${inputValueLength}`)
    try {
      const userAvatarUrl = await downloadAvatar(username);
      setAvatarUrl(userAvatarUrl);
      setProfileUrl(`https://github.com/${username}`)
    } catch (error) {
      console.error('Error fetching avatar:', error);
    }
   
}

// const demoAvatar = ["Raish10100","Sanket","Santosh","Amitabh","Rahul","Hitesh","Harshil","Riyaz","Aryan"]

const demoAvatar = [
  {
    avatarName: 'Raish10100',
    avatarUrl: "https://avatars.githubusercontent.com/u/137144452?v=4"
  },
  {
    avatarName: 'Sanket',
    avatarUrl: "https://avatars.githubusercontent.com/u/20416070?v=4"
  },
  {
    avatarName: 'Santosh',
    avatarUrl: "https://avatars.githubusercontent.com/u/1515991?v=4"
  },
  {
    avatarName: 'Amitabh',
    avatarUrl: "https://avatars.githubusercontent.com/u/98746?v=4"
  },
  {
    avatarName: 'Rahul',
    avatarUrl: "https://avatars.githubusercontent.com/u/858220?v=4"
  },
  {
    avatarName: 'Hitesh',
    avatarUrl: "https://avatars.githubusercontent.com/u/122959?v=4"
  },
  {
    avatarName: 'Harshil',
    avatarUrl: "https://avatars.githubusercontent.com/u/107907?v=4"
  },
  {
    avatarName: 'Riyaz',
    avatarUrl: "https://avatars.githubusercontent.com/u/22842?v=4"
  },
  {
    avatarName: 'Aryan',
    avatarUrl: "https://avatars.githubusercontent.com/u/68467952?v=4"
  }
];


fetchData()


return (
  <>
    {/* <h1>Avatar</h1> */}
    {inputValueLength ?               (
      <div className="container">
        <div className="avatar-container">
          <div className="avatar">
            <span className="avatar-name">{username}</span>
            <a href={profileUrl} target='_blank'  rel="noopener noreferrer">
              <img
                className="avatar-image"
                src={avatarUrl}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
   ) : (
    <div className="container">
      <div className="avatar-container">
        {demoAvatar.map((avatar, index) => (
          <div className="avatar" key={index}>
            <span className="avatar-name">{avatar.avatarName}</span>
            <a href={`https://github.com/${avatar.avatarName}`} target='_blank'  rel="noopener noreferrer">
              <img
                className="avatar-image"
                src={avatar.avatarUrl}
                alt={`Avatar ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )}
  
  </>
);

  };
  export default Avatar;
  
  