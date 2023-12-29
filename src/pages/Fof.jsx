import React from "react";
import "../styles/fof.css";
import { Link } from "react-router-dom";
function Fof() {
  return (
    <div className="fof">
      <div className="fof_container">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/img/captcha.svg"
          alt="404"
          className="fof_image"
        />
        <p className="fof_message">Page Not Found</p>
        <Link to="/">
          <button className="fof_button">Home</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Fof;
