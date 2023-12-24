import React from "react";

import './index.css';
import HomeLeft from '../../components/Home/Home_Left/HomeLeft';
import '../../components/Home/Home_Left/HomeLeft.css';
import HomeRight from '../../components/Home/Home_Right/HomeRight';
import '../../components/Home/Home_Right/HomeRight.css';
import HomeOptions from '../../components/Home/Home_Options/HomeOptions';
import '../../components/Home/Home_Options/HomeOptions.css';

function Home() {
  return (
    <div className='home'>
       
      <div className="total">

        <div className="main">
          <HomeLeft></HomeLeft>
          <HomeRight></HomeRight>
        </div>
        <HomeOptions></HomeOptions>
          
      </div>
    </div>
  
  );
}

export default Home
