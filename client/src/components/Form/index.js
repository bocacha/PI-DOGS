import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './form.module.css';
import { getTemperaments,postRaze } from '../../actions/index'



function Form() {
  const[errors,setErrors]= useState({name:""});
  const valueTemp = useSelector((state) => state.temperaments)
  const dispatch = useDispatch();
  
  function validate(input){
    let errors={};
   
    if(parseInt(input.height_min) >= parseInt(input.height_max)){
      errors.name = 'Initial value cant be greater than final value!'
    }else{
      setErrors({name:""});
    }
    
    if(parseInt(input.weight_min) >= parseInt(input.weight_max)){
      errors.name = 'Initial value cant be greater than final value!'
    }else{
      setErrors({name:""});
    }
    
    if(parseInt(input.life_min) >= parseInt(input.life_max)){
      errors.name = 'Initial value cant be greater than final value!'
    }else{
      setErrors({name:""});
    }
    
    return errors;
  }

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
  })
  

  async function handleSubmit(event) { 
    alert(errors.name)
    if(errors.name !== undefined){
      document.getElementById('form').reset();
      return alert('You have been warned, but attemp to create anyway. Now form will reset!');
    }
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
    setErrors({});

  }

  
  function handleSelect(e){  
    setInput({
      ...input, temperament:[...input.temperament, +e.target.value ]
    })  
  }
   
  function handleChange(e) {  
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
    
  useEffect(() => {
    dispatch(getTemperaments());
  },[dispatch]);

  return (
    <section className={style.container}>

      <form id="form" onSubmit={handleSubmit} className={style.formul}>

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
          <p>Height values:</p>
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
          <p>Weight values:</p>
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
        <p>Life.. values    :</p>
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
        {errors.name && (
          <h4 className={style.danger}>{errors.name}</h4>
        )}
        <select className={style.orderLarge} onChange={handleSelect}
          value={input.temperament[input.temperament.length - 1]}required>
          <option value="">Temperaments:</option>
          {valueTemp.map(e => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
        <div style={{color:'burlywood'}}>{[input.temperament.map(i => valueTemp.find( v => v.id === i)?.name + ", ")]}</div>
    
        <div className={style.footer}>
          <input className={style.orderLarge} type="submit" value="Create Race" />
          <Link className={style.order} to='/home'>Home!</Link>
        </div>

      </form>
    </section>
  )
}



export default  Form;