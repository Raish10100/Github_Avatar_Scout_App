import { useEffect, useState } from 'react';
import downloadAvatar from '../../utils/downloadAvatar';
import './Avatar.css'

const Avatar = ({username,inputValueLength}) => {

const [avatarUrl,setAvatarUrl] = useState(null)

async function fetchData() {
  // console.log(`input length : ${inputValueLength}`)
    try {
      const userAvatarUrl = await downloadAvatar(username);
      console.log("debugging")
      setAvatarUrl(userAvatarUrl);
    } catch (error) {
      console.error('Error fetching avatar:', error);
    }
   
}
fetchData()

const demoAvatar = ["Raish","Sanket","Santosh","Amitabh","Rahul","Hitesh","Harshil","Riyaz","Aryan"]


return (
  <>
    {/* <h1>Avatar</h1> */}
    {inputValueLength ?               (
      <div className="container">
        <div className="avatar-container">
          <div className="avatar">
            <span className="avatar-name">{username}</span>
            <img
              className="avatar-image"
              src={avatarUrl}
              alt=""
            />
          </div>
        </div>
      </div>
   ) : (
    <div className="container">
      <div className="avatar-container">
        {demoAvatar.map((avatar, index) => (
          <div className="avatar" key={index}>
            <span className="avatar-name">{avatar}</span>
            <img
              className="avatar-image"
              src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              alt={`Avatar ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )}
  
  </>
);

  };
  export default Avatar;
  
  