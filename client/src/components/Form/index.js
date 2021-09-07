import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './form.module.css';

import { getTemperaments } from '../../actions/index'

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Dog name is required';
  }
  if (!input.height) {
    errors.height = 'Height is required';
  }
  if (!input.weight) {
    errors.weight = 'Weight is required';
  }
  if (!input.life) {
    errors.life = 'Life span is required';
  }
  if (!input.image) {
    errors.image = 'Set an image to your Dog';
  }
  if (!input.temperaments) {
    errors.temperaments = 'You must choose 1 temperament at least';
  }
  
  return errors; 
};

function Form() {
  const [errors,setErrors]= useState({});
  const valueTemp = useSelector((state) => state.temperaments)
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life: "",
    image: "",
    temperaments: "",
    createdInDb:""
  })


  async function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "http://localhost:3000/home"
    await fetch('http://localhost:3001/razes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
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

      <form onSubmit={handleSubmit} className={style.formul}>

        <div>
          <input className={style.order}
            placeholder="Name"
            type="text"
            name="name"
            required="required"
            value={input.name}
            onChange={handleChange}
          />
        </div>

        <div >
          <input className={style.order}
          placeholder="Height"
            type="text"
            name="height"
            required="required"
            value={input.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <input className={style.order}
          placeholder="Weight"
            type="text"
            name="weight"
            required="required"
            value={input.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <input className={style.order}
          placeholder="Years of Life"
            type="text"
            name="years"
            required="required"
            value={input.life}
            onChange={handleChange}
          />
        </div >



        <div>
          <input className={style.order}
          placeholder="Load image path"
            type="text"
            name="image"
            required="required"
            value={input.image}
            onChange={handleChange}
          />
        </div >

        <select className={style.order} name="nameT" value={input.temperaments} onChange={handleChange} required>
          <option value="">Temperaments</option>
          {valueTemp && valueTemp.map(e => (
            <option key={e.id} value={e.id}>{e.temperaments}</option>
          ))}
        </select>


        <input type="submit" value="Create Race" />
        <Link className={style.order} to='/create_dog'>Go Back!</Link>

      </form>
    </section>
  )
}



export default  Form;