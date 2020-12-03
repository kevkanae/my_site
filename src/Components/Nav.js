import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div class="nav-wrapper grey darken-4">
          <Link to="/" class="brand-logo center">
            A B O U T
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/skills">S K I L L S</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/projects">P R O J E C T S</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
