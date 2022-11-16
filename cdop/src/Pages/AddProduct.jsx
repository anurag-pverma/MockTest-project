import React from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProducts } from "../Redux/action";

const initialState = {
  title: "",
  category: "",
  imageSrc: "",
  price: 0,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "number_of_votes":
      return { ...state, number_of_votes: action.payload };
    case "price_starts_from":
      return { ...state, price_starts_from: action.payload };
    case "image":
      return { ...state, image: action.payload };

    default:
      return state;
  }
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productState, setProductState] = useReducer(
    reducerFunction,
    initialState
  );

  const addHandler = () => {
    if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
      dispatch(addProducts(productState))
        .then(() => dispatch(getProducts()))
        .then(() => {
          navigate("/");
        });
    }
  };

  return (
    <div>
      <h3>Add Product</h3>
      <div
        style={{
          textAlign: "left",
          fonstSize: "19px,width:fit-content",
          margin: "auto",
        }}
      >
        <div >
          <label>Product Name</label>
          <input
            type="text"
            value={productState.name}
            onChange={(e) =>
              setProductState({ type: "name", payload: e.target.value})
            }
          />
        </div>

        <div>
          <label>Type</label>
          <input
            type="text"
            value={productState.type}
            onChange={(e) =>
              setProductState({ type: "type", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>No Of Votes</label>
          <input
            type="number"
            value={productState.number_of_votes}
            onChange={(e) =>
              setProductState({ type: "number_of_votes", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={productState.price_starts_from}
            onChange={(e) =>
              setProductState({ type: "price_starts_from", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            value={productState.image}
            onChange={(e) =>
              setProductState({ type: "image", payload: e.target.value })
            }
          />
        </div>

        <div style={{ textAlign: "right" }}>
          <button onClick={addHandler}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
