import React from 'react';
import style from './header.module.css'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
        <div className={style.headerWrapper}>
            <div className={style.topHeader}>
                <div className={style.topHeader_items}>
                    <a href="#">+99999999</a>
                    <a href="#">email@email.com</a>
                    <a href="#">42 Store Road</a>
                </div>

            </div>
            <div className={style.header}>
                <div className={style.header_items}>
                    <img src={logo} alt="logo"/>
                </div>
            </div>

        </div>
    )
}

export default Header;