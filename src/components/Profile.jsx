import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext)

    if(!user) return <div className='bg-[#c9ada7] mx-auto mt-10 p-5 text-white text-2xl rounded-xl'>Please Login</div>

    return <div  className='bg-[#c9ada7] mx-auto mt-10 p-5 text-white text-2xl rounded-xl'>Welcome ( {user.username} ) your are Logged in</div>
}

export default Profile