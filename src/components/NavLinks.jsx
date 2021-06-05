import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'green' };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          exact
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match && !location.search;
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=msko"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match && location.search;
          }}
        >
          About?name=msko
        </NavLink>
      </li>
    </ul>
  );
}
