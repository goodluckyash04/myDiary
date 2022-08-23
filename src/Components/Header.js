import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      ̥
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* imported frpm app.js title="xyz" */}
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
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
          </ul>
          {props.searchbar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}


Header.defaultProps = {
  title: "Yout Title Here",
  // To show default Value, if not passed in th parent(app.js)
  searchbar: false,
};

Header.propTypes = {
  title: PropTypes.string,
  // if pass other than strings in parent, it will show warning
  searchbar: PropTypes.bool.isRequired, //must pass the searchbar in parent(isReqired)
};
