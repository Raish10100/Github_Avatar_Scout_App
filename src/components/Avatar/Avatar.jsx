import { useEffect, useState } from 'react';
import downloadAvatar from '../../utils/downloadAvatar';
import './Avatar.css'

const Avatar = ({username,inputValueLength}) => {

const [avatarUrl,setAvatarUrl] = useState(null);
const [profileUrl, setProfileUrl] = useState(null);

async function fetchData() {
  // console.log(`input length : ${inputValueLength}`)
    try {
      const userAvatarUrl = await downloadAvatar(username);
      console.log("debugging")
      setAvatarUrl(userAvatarUrl);
      setProfileUrl(`https://github.com/${username}`)
    } catch (error) {
      console.error('Error fetching avatar:', error);
    }
   
}
fetchData()

const demoAvatar = ["Raish10100","Sanket","Santosh","Amitabh","Rahul","Hitesh","Harshil","Riyaz","Aryan"]


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
            <span className="avatar-name">{avatar}</span>
            <a href={`https://github.com/${avatar}`} target='_blank'  rel="noopener noreferrer">
              <img
                className="avatar-image"
                src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
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
  
  