import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-screen h-10 flex bg-yellow-500">
      <div className="flex items-center">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="w-full flex justify-end items-center">
        <ul className="flex justify-end w-full">
          <li className="px-3">
            <NavLink exact to="/royal-family">
              Royal Family
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink exact to="/royal-assets">
              Royal assets
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
