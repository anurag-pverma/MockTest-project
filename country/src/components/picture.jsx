import React from 'react';
import "./Picture.css"
const Picture = ({props}) => {

    return (
        <div className="smallcon">
             <div className="right">
              
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus nemo velit expedita minima animi iste nisi inventore eius amet, obcaecati voluptate asperiores quo, earum fugiat deleniti? Minus, enim assumenda!
                </p>
            </div>
            <div className="left">
            <img src="https://flagcdn.com/w320/bg.png" alt="" />
            </div>
        </div>
    );
};

export default Picture;