import React from 'react';
import logo from "../Asstes/Imgs/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='center-h'>
            <div className='header-wrapper container'>
                <img className="logo" src={logo} />
                <nav>
                    <Link to="/home" className='nav-link'>الرئيسية</Link>
                    <Link to="" className='nav-link'>شروط التسجيل</Link>
                    <Link to="" className='nav-link'>طريقة التسجيل</Link>
                    <Link to="" className='nav-link'>دليل الحاج</Link>
                </nav>
                <div className='account-actions'>
                    <Link to="" className='btn-link login'>تسجيل الدخول</Link>
                    <Link to="" className='btn-link signup'> انشاء حساب</Link>
                </div>
            </div>

        </header>
    );
}

export default Header;
