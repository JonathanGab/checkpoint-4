import React, { useState, useEffect } from 'react';
import API from '../APIclient';
import CreateRoyalFamButton from './CreateRoyalFamButton';

export default function RoyalFamily() {
  const [familly, setFamilly] = useState([]);

  useEffect(() => {
    API.get('/royalfamilly').then((res) => {
      setFamilly(res.data);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-end items-end w-full p-5">
        <CreateRoyalFamButton />
      </div>

      <div className="grid  grid-cols-1 grid-flow-row md:grid-cols-3 w-full h-screen px-16">
        {familly.map((fam) => (
          <div
            key={fam.id}
            className="h-96 w-2/3 flex flex-col border border-black rounded-2xl px-5"
          >
            <div className="p-5 w-full flex flex-col items-center">
              <img
                src={fam.avatar}
                alt={fam.firstname}
                className="p-1 w-full h-72 rounded-lg md:rounded-xl lg:rounded-lg object-contain md:h-40 md:w-40 lg:h-40 lg:w-40 "
              />
              {console.log(fam.avatar)}
            </div>
            <div className="flex flex-col">
              <p>
                {fam.firstname} {fam.lastname}
              </p>
              <div className="text-left pt-5">
                <p>{fam.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
