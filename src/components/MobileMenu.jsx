import { NavLink } from 'react-router-dom';
import { useStateContext } from './context/ContextProvider';
const MobileMenu = () => {
  const { menu, setMenu } = useStateContext();

  return (
    <header className="menu-section">
      <div>
        <NavLink to="/" className="home" onClick={() => setMenu(false)}>
          Frank
        </NavLink>
        <button>
          {menu ? (
            <i
              className="uil uil-multiply menu-icon"
              onClick={() => setMenu(false)}
            ></i>
          ) : (
            <i
              className="uil uil-apps menu-icon"
              onClick={() => setMenu(true)}
            ></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default MobileMenu;
