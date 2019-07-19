import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <a href="https://github.com/ilyandho/Todos-App" target="blank">
            Source
          </a>
        </p>
        <p>Ndhote Ilyas &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
