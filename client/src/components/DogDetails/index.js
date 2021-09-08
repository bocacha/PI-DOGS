import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './details.module.css';




 function Details(props) {
  

  const details = useSelector((state) => state.razes);
  const id = props.match.params.id;
  const dogDetail= details.filter(el => el.id==id);
 
  return (
    
    <div className={style.wc}>

      <div className={style.container}>
        <div className={style.card_container}>

          <div className={style.header}> 
            <h2>{dogDetail[0].name}</h2>
            <img src={dogDetail[0].image} className={style.imagen} width="400" height="300" alt="Img not found"/>
            <h4 className={style.text_white}>{dogDetail[0].temperaments}</h4>
          </div>

          <div className={style.description}>
            <p className={style.wc}>
              <strong >Breed Detail</strong>
            </p>

            <p className={style.text_white}>
              Height:     {dogDetail[0].height} Cm.
            </p>
            <p className={style.text_white}>
              Weight: {dogDetail[0].weight} Kgs.
            </p>

            <p className={style.text_white}>
              Life span: {dogDetail[0].life}  
            </p>
            <Link className={style.order} to='/home'>Go Back!</Link>

          </div>
        </div>
      </div>
    </div>
  
  );
    
};


export default Details; 