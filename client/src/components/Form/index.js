import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './form.module.css';
import { getTemperaments,postRaze } from '../../actions/index'


function Form() {
  
  const valueTemp = useSelector((state) => state.temperaments)
  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_min: "",
    life_max: "",
    image: "",
    temperament: [],
   
    //createdInDb:"true"
  })
  

  async function handleSubmit(event) { 
    const myModel={ 
      name:input.name,
      height: input.height_min + " - " + input.height_max,
      weight:input.weight_min + " - " + input.weight_max,
      life: input.life_min + " - " + input.life_max,
      image:input.image,
      temperament:input.temperament,
    } 
    event.preventDefault();
    dispatch(postRaze(myModel)); 
    alert('Your Dog has been created!')         ;
    //constconsole.log(input);
    setInput({
      name: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_min: "",
      life_max: "",
      image: "",
      temperament: [],  
    })

  }
 
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  function handleSelect(e){
    console.log(input.temperament)
    setInput({
        ...input, temperament:[...input.temperament, e.target.value ]
    })
}
  
  useEffect(() => {
    dispatch(getTemperaments());
  },[dispatch]);

  return (
    <section className={style.container}>

      <form onSubmit={handleSubmit} className={style.formul}>

        <div>
          <input className={style.orderLarge}
            placeholder="Name"
            type="text"
            name="name"
            required="required"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        
        <div className={style.MinMax}>
          <p>Input Height values:</p>
          <div className={style.areaMinMax}>
            <input className={style.order}
              placeholder="Min"
              type="text"
              name="height_min"
              required="required"
              value={input.height_min}
              onChange={handleChange}
            />
            <input className={style.order}
              placeholder="Max"
              type="text"
              name="height_max"
              required="required"
              value={input.height_max}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.MinMax}>
          <p>Input Weight values:</p>
          <div className={style.areaMinMax}>
            <input className={style.order}
              placeholder="Min"
              type="text"
              name="weight_min"
              required="required"
              value={input.weight_min}
              onChange={handleChange}
            />
          </div>
          <div>
            <input className={style.order}
              placeholder="Max"
              type="text"
              name="weight_max"
              required="required"
              value={input.weight_max}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className={style.MinMax}>
        <p>Input Life.. values    :</p>
        <div className={style.areaMinMax}>
            <input className={style.order}
              placeholder="Min"
              type="text"
              name="life_min"
              required="required"
              value={input.life_min}
               onChange={handleChange}
            />
          </div >
          <div>
            <input className={style.order}
              placeholder="Max"
              type="text"
              name="life_max"
              required="required"
              value={input.life_max}
              onChange={handleChange}
            />
          </div >
        </div>


        <div>
          <input className={style.orderLarge}
          placeholder="Load image path"
            type="text"
            name="image"
            required="required"
            value={input.image}
            onChange={handleChange}
          />
        </div >
        {/* name="nameT" */}
        <select className={style.orderLarge}    onChange={handleSelect}required>
          <option value="">Temperaments:</option>
          {
            valueTemp.map((e) => (
              <option key={e.id} value={e.id}>{e.name}</option>
              
            ))
          }
        </select>
        {/* <ul><li>{input.temperament.map(t => t + ', ')}</li></ul> */}
        


        <input type="submit" value="Create Race" />
        <Link className={style.order} to='/home'>Back to Home!</Link>

      </form>
    </section>
  )
}



export default  Form;