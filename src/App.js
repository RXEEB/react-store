import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./Pages/Main";
import  axios from 'axios';

import { Route } from 'react-router-dom'
import Cart from "./Pages/Cart";

import {setProducts} from './redux/actions/products'
import {useDispatch } from "react-redux";



function App() {
    const dispatch = useDispatch()
   
    

    React.useEffect(() => {
      axios.get(`http://localhost:3000/data.json`).then(({data}) => {
                      dispatch(setProducts(data.products))
                    })


    },[] )

    return (
        <div className='App'>
            <Header />
            <div className='content'>

                <Route path='/' component ={Main} exact />
                <Route path='/cart' component ={Cart}  exact />

            </div>
        </div>
        
    )


}

export default App



