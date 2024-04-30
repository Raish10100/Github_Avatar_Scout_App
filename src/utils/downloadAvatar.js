import axios from 'axios'

async function downloadAvatar(username){

    if(username !== ""){
        console.log("username",username)
        const DEFAULT_URL =  `https://api.github.com/users/${username}`
        console.log(DEFAULT_URL)
        const responce = await axios.get(DEFAULT_URL)
         console.log('responce', responce);
        const userAvatarUrl = responce.data.avatar_url;
        // console.log(userAvatarUrl)
        return userAvatarUrl
    }
        

}

export default downloadAvatar;