import {} from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Blog</h2>
      </div>
      <div>
        <div className="imageUser">
          <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
