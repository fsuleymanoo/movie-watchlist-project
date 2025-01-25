import React from "react";

function Navbar({children}) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container justify-content-center">
        <div className="navbar-brand fs-3 fw-bold text-primary text-opacity-75">
          Movie Watch List
        </div>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;
