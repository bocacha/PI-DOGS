import React from 'react';
import style from './card.module.css';


export default function Card({name,image,weight,temperaments}){
    return (
        <div className={style.card}>
            <h3>{name}</h3>
            {/* {<DogDetails />} */}
            <img src={image} alt="Img not found" width="240" height="180"  />
            <h4>{weight} Kgs.</h4>
            <h4>{temperaments}</h4>
        </div>
    )
}