import React from 'react';
import style from './paginate.module.css';

export default function Paginate({razesPerPage,allRazes,paginate}){
    const pageNumbers = [];

    for( let i = 0; i < Math.ceil(allRazes/razesPerPage);i++){
        pageNumbers.push(i+1);
    }

    return(
        <div className={style.navContainer}>
            <div className={style.pagination}>
                { 
                pageNumbers &&
                pageNumbers.map((number) =>{
                    return (
                        <div className={style.number} key={number}>
                            <p onClick={() => paginate(number)}>{number}</p>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}