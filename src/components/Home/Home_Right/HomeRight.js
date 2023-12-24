import React from 'react';
import './HomeRight.css';
import homeright from '../../../constants/Home/homeright.json'

function HomeRight() {
  return (
    <div className="home-right">
            <p className='first'>
                {homeright.first}
            </p>
            <p className="second">
                {homeright.second}
            </p>
            <p className="third">
              {homeright.third}
            </p>
    </div>
  )
}




export default HomeRight;
