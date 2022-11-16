import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const [sortBy,setSortBy]=useState(searchParams.get("sortBy")|| "");

  const sortHandler = (e) =>{
    setSortBy(e.target.value);
    if(e.target.value!==""){
      setSearchParams({sortBy:e.target.value})
    }
  };

  return (
    <div style={{ minWidth: "250px" ,border:"1px solid green"}}>
      <h3>Sort By</h3>

      <div style={{textAlign:"left",fontSize:"20px"}}>
        <div>
          <input type="radio" data-cy="asc" value="asc" checked={sortBy==="asc"}
           onChange={sortHandler} style={{width:"20px"}} />
          <label>Ascending</label>
        </div>

        <div>
          <input type="radio" data-cy="desc" value="desc" checked={sortBy==="desc"}
           onChange={sortHandler} style={{width:"20px"}} />
          <label>Descending</label>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
