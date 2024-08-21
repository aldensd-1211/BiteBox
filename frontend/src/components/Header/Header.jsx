import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Order now and savor the best dishes from the comfort of your home with
          BiteBox!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
