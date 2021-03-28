import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./Pages/Main";
import Cart from "./Pages/Cart";
import {Route} from 'react-router-dom'




function App() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
            fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json =>{
                setData(json.data)
            })
        }, [])

    return(
        <div className='App'>
            <Header/>
            <Main/>
            <Route path='/' render={() => <Main/> } exact />
            <Route path='/cart' render={() => <Cart/> } exact />
        </div>
    )
}
export default App




