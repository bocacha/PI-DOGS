import React from 'react';
import style from './card.module.css';


export default function Card({name,image,weight,temperaments}){
    return (
        <div className={style.card}>
            <h3 id="name">{name}</h3>
            <img className={style.picture} src={image} alt="Img not found" width="240" height="180"  />
            <h4 id="weight">{weight} Kgs.</h4>
            <h5 className={style.description}>{temperaments}</h5>
           
        </div>
    )
}