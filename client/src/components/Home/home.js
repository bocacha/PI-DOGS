import React  from 'react';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRazes,orderByName,filterRazesByTemp,getTemperaments,filterCreated } from '../../actions'
import {Link} from 'react-router-dom';
import Card from '../Card';
import Paginate from '../Paginate';
import style from './home.module.css'

export default function Home(){

    const dispatch = useDispatch();
    const allRazes = useSelector((state) => state.razes);
    const allTemperaments = useSelector((state) =>state.temperaments);
    const [order,setOrder] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
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
    //ordena ASC / DES
    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    }
    //No funciona filtro por temperamento
    function handleFilterTemp(e){
        e.preventDefault();
        alert(e.target.value);
        dispatch(filterRazesByTemp(e.target.value));
    }
    //Filtro por origen de datos
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }
    
    return (
        <>
        <div>
            <div className={style.areaButtons}>
                <h1>Dogs Parade!</h1>
                                
                <button className={style.order} onClick={e => {handleClick(e)}}>Search by name...</button>

                <select className={style.order} onChange={e =>{handleSort(e)}}>
                <option value="">Order them by:</option>
                    <option value="asc">Upward!</option>
                    <option value="des">Falling!</option>
                </select>

                <select className={style.order} onChange={e =>{handleFilterTemp(e)}}>
                    <option value="">Choose temperament :</option>
                        {
                            allTemperaments.map((temp) =>(                                
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            ))
                        }
                </select>

                <select className={style.order} onChange={e =>{handleFilterCreated(e)}}>
                    <option value="">View from...</option>
                    <option value="created">You own!</option>
                    <option value="api">Api dogs</option>
                    <option value="all">All of them</option>    
                </select> 
                <Link className={style.order} to='/create_dog'>Create your own!</Link>
                
            </div> 
            <hr />
        </div>
        <div className={style.container}>            
            {currentRazes?.map( (el) =>{
                return(
                    <div className={style.cardsContainer} key={el.id}>
                        <Link to={"/home/" }className={style.link}>
                            <Card name={el.name} image={el.image} weight={el.weight} temperaments={el.temperaments} />
                        </Link>
                    </div>
                );
            })} 
            
        </div>
        <div className={style.pagContainer}>
        <Paginate
                razesPerPage = {razesPerPage}
                allRazes = {allRazes.length}
                paginate = {paginate} 
            />   
        </div>
        </>
    )





}