import navStyle from "../style/navbar.module.scss";

import PropTypes from "prop-types";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ themeLight, onClickTheme }) => {
  const handleClick = () => {
    if (onClickTheme) {
      onClickTheme();
    }
  };

  return (
    <>
      <div className={`${navStyle.container}`}>
        <div className={navStyle.logo}>Where in the world?</div>
        <div className={navStyle.darkmode}>
          <button type="button" onClick={handleClick}>
            <div className={navStyle.icon}>
              {themeLight ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
            <div className={navStyle.title}>
              {themeLight ? "Light Mode" : "Dark Mode"}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  onClickTheme: PropTypes.func.isRequired,
  themeLight: PropTypes.bool,
};
export default Navbar;
