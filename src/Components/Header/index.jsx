import React from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LOG_URL } from '../../utils/constants'
import './styles.css'
const Header=()=>{
    return (<div className="header">
        <img src={LOG_URL}/>
        <ul>
            <li>
               <Link to='/'>Home</Link> 
            </li>
            <li>
                <Link to="/about">about</Link> 
            </li>
            <li>
                Log out  
            </li>
        </ul>
    </div>)
}

export default Header