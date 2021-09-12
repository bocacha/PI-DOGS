import React from 'react';
import { Link } from 'react-router-dom';
import styles from './page.module.css';
import dog from '../../images/dog.png'

export function Page() {
  return (
    <header>

      <div className={styles.container}>
        <img className={styles.imagen}src={dog} alt="Img not Found" />
      </div>
      <div className={styles.text}>

          <Link to="/home">ENTER!</Link>
      </div>
      

    </header>

  )
};

export default Page;