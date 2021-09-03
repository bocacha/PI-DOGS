import React  from 'react';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRazes,filterRazesByTemp,getTemperaments } from '../../actions'
import {Link} from 'react-router-dom';
import Card from '../Card';
import Paginate from '../Paginate';
import style from './home.module.css'

export default function Home(){

    const dispatch = useDispatch();
    const allRazes = useSelector((state) => state.razes);
    const allTemperaments = useSelector((state) =>state.temperaments);
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

    function handleClick(e){
        e.preventDefault();
        dispatch(getRazes());
    }

    function handleFilterTemp(e){
        e.preventDefault();
        dispatch(filterRazesByTemp(e.target.value));
    }
    
    return (
        <>
        <div>
            <div className={style.areaButtons}>
                <h1>Dogs Parade!</h1>
                                
                <button onClick={e => {handleClick(e)}}>Load Dogs</button>

                <div className={style.order}>
                    <option value="asc">Upwward</option>
                    <option value="des">Falling</option>
                </div>

                <select onChange={e =>{handleFilterTemp(e)}}>
                    <option value="">Choose temperament :</option>
                        {
                            allTemperaments.map((temp) =>(                                
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            ))
                        }
                </select>

                <select>s
                    <option value="">View from...</option>
                    <option value="created">You own!</option>
                    <option value="api">Api dogs</option>
                    <option value="all">All of them</option>    
                </select> 
                <Link className={style.link} to= '/create_dog'>Create your own!</Link>
            </div> 
        </div>
        <div className={style.container}>            
            {currentRazes?.map( (el) =>{
                return(
                    <div className={style.cardsContainer} key={el.id}>
                        <Link to={"/home/" }>
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