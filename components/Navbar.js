import React from "react";
// here we have to import proptypes to use props
import PropTypes from "prop-types";
// rfc for React function baased component
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* here i passed the (props) from app.js */}

          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.about}
                </a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              {/* here we used ternary operator for invert color */}
              <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
                Enable {props.mode === 'light'? 'Dark':'Light'} mode
              </label>
            </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// here we add Navbar.proptype bcz if we want to hardcode the datatype of the props then we can through it like bellow
// if we add (isRequired) then if we dont give the value of the prop then it will give error/warning
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
//   default props
// Specifies the default values for props:
// it will give a difault value to props is its not innitialized
Navbar.defaultProps = {
  title: "Stranger404",
  about: "About TextUtils Default",
};
