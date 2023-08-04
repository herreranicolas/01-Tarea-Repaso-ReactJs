import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuBar = ({ menu }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {menu.map((menuItem) => (
        <li className="nav-item " key={menuItem.id}>
          <MenuItem menuItem={menuItem} />
        </li>
      ))}
    </ul>
  );
};

MenuBar.propTypes = {
  menu: PropTypes.arrayOf(Object),
};

MenuBar.defaultProps = {
  menu: [{ id: 1, name: "Link", link: "/", active: true }],
};

export default MenuBar;
