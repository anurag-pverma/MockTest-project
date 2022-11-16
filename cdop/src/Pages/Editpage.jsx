import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts, getProducts } from "../Redux/action";


const Editpage = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const navigate=useNavigate();

  const [title,setTitle] = useState('');
  const [price,setPrice] = useState('');

  const handleUpdate = () =>{
   let params={
    title:title,
    price:price,
   };

   dispatch(editProducts(id,params))
   .then((r)=>{
    dispatch(getProducts());
    navigate("/");
   });
  };
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Editpage;
