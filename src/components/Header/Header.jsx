import React from 'react';
import style from './header.module.css'
import logo from '../../assets/img/logo.png'
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";

function Header() {
    return (
        <div className={style.headerWrapper}>
            <div className={style.topHeader}>
                <div className={style.topHeader_items}>

                    <a  href="#"> <FaPhoneAlt/>&emsp;+99999999</a>
                    <a href="#"><FaEnvelope/>&emsp;email@email.com</a>
                    <a href="#"><FaMapMarkerAlt/>&emsp;42 Store Road</a>
                </div>

            </div>
            <div className={style.header}>
                <div className={style.header_items}>
                    <img src={logo} alt="logo"/>
                   

                    <div className={style.header__cart}>

                            <div className={style.cart_price} >
                                500 p
                            </div>
                        <div className={style.cart_items} >
                            500 p
                        </div>

                    </div>



                </div>



            </div>

        </div>
    )
}

export default Header;