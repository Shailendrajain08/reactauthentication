import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const usenavigate = useNavigate()
    useEffect(() => {
        let id = sessionStorage.getItem('id');
        if(id === '' || id === null){
            usenavigate('/login');
        }
    }, [])

  return (
    <div>
          <div className='navigate'>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Logout</Link>
        </div>
    </div>
  )
}
