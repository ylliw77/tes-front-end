// import { useState } from "react";
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar_container">
        <ul className="nav_list">
          <li className="nav_items">
            <a href="">
            <CompassCalibrationIcon/>
            </a>
          </li>

          <li className="nav_items">
            <a href="">
            <AccountCircleIcon/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
