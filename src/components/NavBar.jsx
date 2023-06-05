import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
const NavBar = () => {
  const activeStyle = {
    color: ' #5a60ea',
  };
  return (
    <div className="nav-bar">
      <div>
        <NavLink to="/">
          <img src={Logo} alt="logo" className="logo" />
        </NavLink>
      </div>
      <ul className="links">
        <NavLink
          to="/about"
          className="link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/jokes"
          className="link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Jokes
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
