import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logoHenry.png';

import styles from './nav.module.css'

export default function NavBar() {
    return (
        <header className={styles.NavBar}>
            <div>
                
            
            <nav className={styles.navBar}>
            
                <ul className={styles.list}>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <li className={styles.list_item}>
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/dogs" >Razas</NavLink>
                        <NavLink to="/create_dog" >Create!</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}