import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LOG_URL } from '../../utils/constants'
import UserContext from '../../utils/UserContext'
//mx--> margin on left and right means x axis
const Header=()=>{
    const headerData=useContext(UserContext)

    return (<header className="flex justify-between bg-gray-100 shadow-lg mx-1">
        <img src={LOG_URL} className="w-20 h-20"/>
        <ul className='flex m-2 p-2'>
        <li className='m-2 p-2'>
               <Link to='/'>Home</Link> 
            </li>
            <li className='m-2 p-2'>
               <Link to='/'>Home</Link> 
            </li>
            <li  className='flex m-2 p-2'>
                <Link to="/about">about</Link> 
            </li>
            <li  className='flex m-2 p-2'>
                <Link to="/grocery">grocery</Link> 
            </li>
            <li className='flex m-2 p-2'>
            {headerData?.loggedinUser} 
            </li>
        </ul>
    </header>)
}

export default Header