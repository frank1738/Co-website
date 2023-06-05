import { NavLink } from 'react-router-dom';
import { useStateContext } from './context/ContextProvider';
function Menu() {
  const { menu, setMenu } = useStateContext();
  const activeStyle = {
    color: ' #5a60ea',
  };
  return (
    <div className={`menu-content ${menu && 'height'}`}>
      <NavLink
        to="/about"
        className="menu-icon-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setMenu(false)}
      >
        <i className="uil uil-user"></i>
        <p>About</p>
      </NavLink>
      <NavLink
        to="/projects"
        className="menu-icon-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setMenu(false)}
      >
        <i className="uil uil-bag"></i>
        <p>Projects</p>
      </NavLink>
      <NavLink
        to="/jokes"
        className="menu-icon-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setMenu(false)}
      >
        <i className="uil uil-laughing"></i>
        <p>Jokes</p>
      </NavLink>
    </div>
  );
}

export default Menu;
