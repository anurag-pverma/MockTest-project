import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:"flex",padding:"0 10px",position:"relative"}}>
      <div style={{fontSize:"24px",fontWeight:"bold",width:"100%",textAlign:"center",padding:"10px"}}>Product Dashboard</div>
      <div style={{position:"absolute",right:"30px",top:"12px"}}>
        {/* Link the button to the /add route, when the user clicks on the button */}
        <Link to="/add">
        <button data-cy="add-product-navbar-button"
        style={{fontSize:"16px"}}>Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
