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
    height: "",
    weight: "",
    life: "",
    image: "",
    temperament: [],
    //createdInDb:"true"
  })


  async function handleSubmit(event) { 
    event.preventDefault();
    dispatch(postRaze(input)); 
    alert('Your Dog has been created!')         ;
    // constconsole.log(input);
    setInput({
      name: "",
      height: "",
      weight: "",
      life: "",
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
            name="life"
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
        {/* name="nameT" */}
        <select className={style.order}    onChange={handleSelect}required>
          <option value="">Temperaments:</option>
          {
            valueTemp.map((e) => (
              <option key={e.id} value={e.id} >{e.name}</option>
            ))
          }
        </select>
        <ul><li>{input.temperament.map(t => t + ', ')}</li></ul>


        <input type="submit" value="Create Race" />
        <Link className={style.order} to='/home'>Go Back!</Link>

      </form>
    </section>
  )
}



export default  Form;