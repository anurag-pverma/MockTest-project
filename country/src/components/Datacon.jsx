import React from 'react';
import "./datacon.css"
import Card from './singlecard';

const Datacon = (props) => {
  
    return (
        <>
        <div className="gridcon">
            <h2 className="gridtitle">Some random information.</h2>
            <div className="grid">
                <Card props={props.props}/>
            </div>
        </div>


        <div className="quotecont">
            <p className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste fuga ducimus quos pariatur magnam quae ipsam id, ullam autem voluptatibus quia animi optio laboriosam omnis dolorem molestias ipsa provident?
          </p>
           
        </div>

       
        
    
    </>
    );
};

export default Datacon;