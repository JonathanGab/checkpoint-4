import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../APIclient';

export default function RoyalFamily() {
  const [familly, setFamilly] = useState([]);

  useEffect(() => {
    API.get('/royalfamilly').then((res) => {
      setFamilly(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <NavLink exact to="/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </NavLink>
      </div>
      <div className="grid grid-flow-row grid-cols-3">
        {familly.map((fam) => (
          <div key={fam.id}>
            <p>name :{fam.firstname}</p>
            <p>lastname :{fam.lastname}</p>
            <p>{fam.description}</p>
            <img src={fam.avatar} alt={fam.firstname} />
            {console.log(fam.avatar)}
          </div>
        ))}
      </div>
    </div>
  );
}
