import React from 'react';
import './Userprofile.css'; //Import the CSS file
// Sample data: list of users
const users = [
  {
    class : "Usercard 1",
    id: 1,
    name: 'John Doe',
    age: 28,
    email: 'john@example.com',
    location: 'New York',
    interests: ['UNICEF Global education initiative']
  },
  {
    class : "Usercard 2",
    id: 2,
    name: 'Jane Smith',
    age: 34,
    email: 'jane@example.com',
    location: 'California',
    interests: ['UCT Lung Cancer Institute']
  },
  {
    class : "Usercard 3",
    id: 3,
    name: 'Alex Johnson',
    age: 23,
    email: 'alex@example.com',
    location: 'Texas',
    interests: ['Red Cross Children Hospital']
  },
  // Add more users as needed
];

const Userprofile = () => {
  return (
    <div>
      <h2 class= "Userprofile h2">User Profiles</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Interests:</strong> {user.interests.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userprofile;


