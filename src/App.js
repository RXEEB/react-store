import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./Pages/Main";


import {Route} from 'react-router-dom'
import Cart from "./Pages/Cart";





 function App() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
            fetch('http://localhost:3000/data.json').then((resp) => resp.json()).then(json =>{
                setData(json.data)
            })
        }, [])

    return(
        <div className='App'>
            <Header/>
            <div className='content'>

            <Route path='/' render={() => <Main items={data}/> } exact />
            <Route path='/cart' render={() => <Cart/> } exact />

            </div>
        </div>
    )
}
export default App



