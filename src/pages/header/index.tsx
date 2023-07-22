import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/first">First</Link>
            </li>
            <li>
              <Link to="/second">Second</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
