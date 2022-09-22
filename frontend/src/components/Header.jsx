import React from 'react'
import { FaSignInAlt, FaPen, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <h2>
            YUCE-HAYDAR-NOT-UYGULAMASI
        </h2>
        <div className='logo'>
            
        </div>
        <ul>
            <li>
                <Link to="/"><FaPen/>NOT OLUŞTUR</Link>
            </li>
            <li>
                <Link to="/login"><FaSignInAlt/>giriş yap hazretleri</Link>
            </li>
            <li>
                <Link to="/register"><FaUser/>kayit ol</Link>
            </li>
        </ul>

    </header>
  )
}

export default Header