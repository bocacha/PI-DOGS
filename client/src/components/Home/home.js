import React  from 'react';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRazes,getRazesName,orderByName,filterRazesByTemp,getTemperaments,filterCreated,filterWeigth } from '../../actions'
import {Link} from 'react-router-dom';
import Card from '../Card';
import Nav from '../Nav/Nav';
import dog from '../../images/dog.png'

import Paginate from '../Paginate';
import style from './home.module.css'

export default function Home(){

    const dispatch = useDispatch();
    const allRazes = useSelector((state) => state.razes);
    const allTemperaments = useSelector((state) =>state.temperaments);
    
    // eslint-disable-next-line
    const [order,setOrder] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [razesPerPage,setRazesPerPage]=useState(8);
    const indexLastRaze = currentPage * razesPerPage;
    const indexFirstRaze = indexLastRaze - razesPerPage;
    const currentRazes = allRazes.slice(indexFirstRaze,indexLastRaze);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    useEffect (() =>{
        dispatch(getRazes());
        dispatch(getTemperaments());
    },[dispatch]);

    //actualiza el listado
    function handleClick(e){
        e.preventDefault();
        dispatch(getRazes());
        
    }
    //Filtro ASC / DES
    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    }
    //Filtro por peso
    function handleWeight(e){
        e.preventDefault();
        dispatch(filterWeigth(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);

    }
    //Filtro por temperamento
    function handleFilterTemp(e){
        e.preventDefault();
        dispatch(filterRazesByTemp(e.target.value));
    }
    //Filtro por origen de datos
    function handleFilterCreated(e){        
        dispatch(filterCreated(e.target.value))
    }
    //Busqueda por nombre
    const [input,setInput]=useState({
        raza:" ",
    });
    //Carga de inputs
    function handleInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value           
        })
    }    
    //Busqueda por Raza
    function handleDispatch(e){
        e.preventDefault();
        if(input.raza){
            dispatch(getRazesName(input.raza))
            document.getElementById('form').reset();
        }else{
            alert("Raze name is mandatory!")
        }
        setInput("");
    }
    

    return (
        <>
            <div className={style.areaSearch}>                                    
                <img className={style.imagen}src={dog} alt="Img not Found" />
      
                <form id="form" onSubmit={handleDispatch}>
                    <input className={style.order} type="text" autoComplete="off" name="raza"  value={input.raza} placeholder="Search by raze..." onChange={handleInput}/>
                    <button type="submit" className={style.order} >Search</button>
                 </form>

                <Link className={style.order} to='/create_dog'>Create your own!</Link>

            </div>
            <hr className={style.linea} />
            <div className={style.titleFilter}><h3>Filter your Dogs by:</h3></div>
            
            <div className={style.areaFilter}>
                <select className={style.order} onChange={e =>{handleSort(e)}}>
                    <option value="">Alphabetic:</option>
                    <option value="asc">Upward!</option>
                    <option value="des">Falling!</option>
                </select>

                <select className={style.order} onChange={e =>{handleWeight(e)}}>
                    <option value="">Weight:</option>
                    <option value="menor">Ligther</option>
                    <option value="mayor">Heavier</option>
                </select>

                <select className={style.order} onChange={e =>{handleFilterTemp(e)}}>
                    <option value="">Temperament :</option>
                        {
                            allTemperaments.map((temp) =>(                                
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            ))
                        }
                </select>

                <select className={style.order} onChange={e =>{handleFilterCreated(e)}}>
                    <option value="">Source...</option>
                    <option value="created">Your own!</option>
                    <option value="api">Api dogs</option>
                    <option value="all">All of them</option>    
                </select> 
                <button className={style.order} onClick={e => {handleClick(e)}}>REFRESH FILTERS!</button>
            </div>                
            
            <hr className={style.linea} />
        
        <div className={style.container}>            
            {currentRazes?.map( (el) =>{
                    return(
                        <div className={style.cardsContainer} key={el.id}>
                            <Link to={`/razes/${el.id}`  }className={style.link}>
                                <Card name={el.name} image={el.image}height={el.height} life={el.life} weight={el.weight} temperaments=
                                {el.createdInDb?el.temperamentos.map(e => e.name + ", "):el.temperaments + ", "} />
                            </Link>
                        </div>
                    );                
                })
            }             
        </div>
        <div className={style.pagContainer}>
        <Paginate
                razesPerPage = {razesPerPage}
                allRazes = {allRazes.length}
                paginate = {paginate} 
            />   
        </div>
        <Nav />
        </>
    )
}