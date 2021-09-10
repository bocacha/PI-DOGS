import React from 'react';
import Logo from '../../images/logoHenry.png';

import styles from './nav.module.css'

export default function NavBar() {
    return (     
        <>    
            <hr className={styles.linea}/> 
            <div className={styles.footer}>    
                <img id="logoHenry" src={Logo} width="30" height="30"  alt="Img not found!" />               
                <p>Powered by henry labs - FT 16 A Cohort - Parana-Entre Rios  - Septiembre 2021</p>
            </div>           
        </>
    )
}