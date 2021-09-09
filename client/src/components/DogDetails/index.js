import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getRazesId} from '../../actions/';
import style from './details.module.css';




 function Details(props) {
  
  const dispatch = useDispatch();

  const id = props.match.params.id;
  console.log(id);
  
  useEffect(()=>{
    dispatch(getRazesId(id));
  },[dispatch,id]);

  const details = useSelector((state) => state.razasDetail);
  return (
    
    <div className={style.wc}>
       {details.length > 0 ?
      <div className={style.container}>
        <div className={style.card_container}>

          <div className={style.header}> 
         
            <h1>{details[0].name}</h1>
            <img src={details[0].image} className={style.imagen} width="400" height="300" alt="Img not found"/>
            <h2 className={style.text_white}>{!details[0].createdInDb ? details[0].temperaments + ' ' : details[0].temperamentos.map(e=> e.name + (','))} </h2>
          </div>

          <div className={style.description}>
            <p className={style.wc}>
              <strong >Breed Detail</strong>
            </p>

            <p className={style.text_white}>
              Height:     {details[0].height} Cm.
            </p>
            <p className={style.text_white}>
              Weight: {details[0].weight} Kgs.
            </p>

            <p className={style.text_white}>
              Life span: {details[0].life}  
            </p>
            

            <Link className={style.order} to='/home'>Go Back!</Link>

          </div>

        </div>
      </div>: <p>Loading...</p>
    }
    </div>
  
  );
    
};


export default Details; 