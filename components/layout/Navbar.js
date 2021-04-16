import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="innerNav">
        <div className="logo">logo</div>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">content</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
