import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/hakkimda">Hakkımda</Link>
        </li>
        <li>
          <Link to="/iletisim">İletişim</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;