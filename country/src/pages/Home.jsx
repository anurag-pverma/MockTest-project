import React from 'react';
import { useEffect } from 'react';
// import Datacon from '../components/Datacon';
import Picture from '../components/picture';
import ReactLoading from "react-loading";
import  axios from 'axios'
import { useState } from 'react';
import "../components/datacon.css"
import Card from '../components/singlecard';
import { useNavigate } from 'react-router-dom';
import Loadder from '../components/Loadder';
import { useMemo } from 'react';

const Home = () => {
    const [data,setData]=useState([])
    const [count,setCount]=useState(0)
    const[reg,setReg]=useState("")
    const[pop,setPop]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
      if(reg==""){
       axios.get("https://restcountries.com/v3.1/all")
       .then((res)=>{
       
        setData(res.data)
       })
       .catch(err=>{
        console.log(err)
       })
    }
    else{
        axios.get(`https://restcountries.com/v3.1/region/${reg}`)
        .then((res)=>{
        console.log(res.data,"chnge")
         setData([...res.data])
        })
        .catch(err=>{
         console.log(err)
        }) 
    }
    },[reg])
   useMemo(()=>{
    if(pop=="asc"){
        data.sort((a,b)=>a.population-b.population)
       
    }
    else {
        data.sort((a,b)=>b.population-a.population)
    }
   },[pop])

    function click(key){
       
    }
    
    return (
        <div>

        <Picture />
           
           <div className="gridcon">
           {data.length>0?<div>
            
              <select name="" id="" onChange={(e)=>{
                setPop(e.target.value)
              }}>
                <option value="">Population</option>
                <option value="asc">asc</option>
                <option value="des">desc</option>
              </select>
              <select name="" id="" onChange={(e)=>{
                setReg(e.target.value)
              }}>
                <option value="">Choose by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              </div>:<Loadder/>}
             
              

            <div className="grid">
            
                   {data?data.map((key, index) => {
                         console.log(key,index)
             return <Card props={key} key={index} Click={()=>click(key)}/>
                   }):<ReactLoading type="spin" color="#fff"/>} 
              



            </div>
            
        </div>
      

        <div className="quotecont">
            <p className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste fuga ducimus quos pariatur magnam quae ipsam id, ullam autem voluptatibus quia animi optio laboriosam omnis dolorem molestias ipsa provident?
          </p>
           
        </div>

        </div>
    );
};

export default Home;