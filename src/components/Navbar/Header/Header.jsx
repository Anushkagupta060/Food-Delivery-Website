import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Our Favourite Food Here!!</h2>
        <p>
          Recipes guide dish preparation, cuisine defines cooking styles,
          garnishes decorate dishes, and marinating involves soaking food in
          seasoned liquids.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
