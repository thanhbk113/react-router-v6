import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../auth';

const Profile = () => {
   const auth = UseAuth()
   const navigate = useNavigate()
   const handleLogout = () => {
       auth.logout()
      navigate('/')
   }

    return (
        <div>
            Welcome {auth.user}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;