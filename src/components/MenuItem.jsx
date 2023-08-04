import PropTypes from "prop-types";

const MenuItem = ({ menuItem }) => {
  return (
    <a
      className={`nav-link ${
        menuItem.active ? "active text-warning" : "text-white"
      }`}
      aria-current="page"
      href={menuItem.link}
    >
      {menuItem.name}
    </a>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
};

MenuItem.defaultProps = {
  menuItem: {
    id: 1,
    name: "Nombre predeterminado",
    link: "/",
    active: false,
  },
};

export default MenuItem;
