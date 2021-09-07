import {React,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getRazesId} from '../../actions/index';
import style from './details.module.css';




function Details(props) {
  const id = parseInt(props.match.params.id);
  //alert(id);
  const dispatch = useDispatch();
  
  const details = useSelector((state) => state.razasDetail);
  useEffect(() => {
  dispatch(getRazesId(id));
  },[dispatch,id]);
  
  
  //alert(details.name)
  return (
    
    <div className={style.wc}>

      <div className={style.container}>
        <div className={style.card_container}>
          <div className={style.header}> 
         
            <img src={details.imgage} className={style.imagen} width="400" height="300" alt="Img not found"/>
          
            <h2>
              {details.name}
            </h2>
            <h4 className={style.text_white}>{details.temperaments}</h4>
          </div>
          <div className={style.description}>
            <p className={style.wc}>
              <strong >Breed Detail</strong>
            </p>

            <p className={style.text_white}>
              Height: {details.height}
            </p>
            <p className={style.text_white}>
              Weight: {details.weight}
            </p>

            <p className={style.text_white}>
              Life span: {details.life_span}
            </p>


          </div>
        </div>
      </div>
    </div>
    
  )
};




export default Details; 