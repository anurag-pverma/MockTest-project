import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./datacon.css"
const Card = ({props,Click}) => {
  const[show,setshow]=useState(false)
  useEffect(()=>{
  //  var keys= Object.keys(props.name.nativeName)
    // var key2=key[0]
    // var {official}={...props.name.nativeName[key2]}
  
    // console.log(key2,"dfd",official)
  },[])
   
    return (
                  
                <div className="card"
                 
                 >
                  <img src={props.flags.png} alt="" />
                  <h2>{props.name.official}</h2>
                  <h4>Population:{props.population}</h4>
                  <h4>Region:{props.region}</h4>
                  <h4>Capital:{props.capital}</h4>
                  <div>
                  
                  {!show?<button
                    onClick={()=>{
                      setshow(true)
                    }}
                    >More Details</button>:
                    <div>
                      <h4>Navtive:</h4>
                      <h4>subRegion:</h4>
                      <h4>Languages:{props.borders.map((e,i)=>{
                        return <span>{e} </span>
                      })}</h4>
                     <button  onClick={()=>{
                      setshow(false)
                    }}>show less</button>
                    </div>}
                
                    
                  </div>
                </div> 
       
    );
};

export default Card;