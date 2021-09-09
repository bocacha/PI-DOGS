import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home"
import Page from "./components/Page/index"
import Details from './components/DogDetails/index'
import Form from './components/Form/index'

function App() {
  return (
    <React.Fragment>
          <Route path="/" exact component={Page}/>
          <Route path="/home" component={Home} />
          <Route path="/razes/:id" component={Details}/>
          <Route path="/create_dog" component={Form}/>
          {/* <Route path="/crearRaza" component={Form}/> */}
      </React.Fragment>
  );
}

export default App;
