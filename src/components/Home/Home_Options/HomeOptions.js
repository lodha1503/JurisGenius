import React from 'react'
import './HomeOptions.css'
import { NavLink } from 'react-router-dom';


const options = [
    {path:'/rnw',label:'Research Work'},
    {path:'/opportunities',label:'Opportunities'},          
    {path:'/publications',label:'Publications'}
]

function HomeOptions() {
  return (
    <div className="options">
        {
            options.map((option,index)=>(
                <NavLink key={index} to={option.path} className={`opt-link opt-link-${option.path.substring(1)}`}>
                    <div>{option.label}</div>

                </NavLink>
            ))
        }
            
    </div>
  )
}

export default HomeOptions
