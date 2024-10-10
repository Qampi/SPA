/*import React, { usestate, useeffect } from 'react';
function UserProfile() {
    const [userData, setUserData] = useState({});
    useeffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user-profile');
                const data = await response.json(); 
                setUserData(data);
            } catch (error) {
                console.erroe(error);
            }
        };
        fetchUserData();
    }, []);
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <Donation/>
        </div>
    );
}*/
import React, { useState, useEffect } from 'react';
//import Donation from './Donation'; // Make sure the path is correct

function UserProfile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user-profile');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error); // Fixed typo
      }
    };

    fetchUserData();
  }, []);

  return (
    <div class="user">
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* <Donation /> */}
    </div>
  );
}

export default UserProfile;
