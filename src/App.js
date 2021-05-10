import React from "react";
import {content} from 'react-redux'
import './App.css';
import Header from "./components/Header/Header";
import Main from "./Pages/Main";


import {Route} from 'react-router-dom'
import Cart from "./Pages/Cart";
import {setProducts} from './redux/actions/products'
import { connect } from "react-redux";
import store from "./redux/store";





//  function App() {
//     // const [data, setData] = React.useState([])

//     // React.useEffect(() => {
//     //         fetch('http://localhost:3000/data.json').then((resp) => resp.json()).then(json =>{
//     //             setData(json.data)
//     //         })
//     //     }, [])

    class App extends React.Component {

        componentDidMount(){
            fetch('http://localhost:3000/data.json').then((resp) => resp.json()).then(json =>{
                window.store.dispatch(setProducts(json.data))
            })
      
        }
        render(){
            return(
                <div className='App'>
            <Header/>
            <div className='content'>

            <Route path='/' render={() => <Main items={this.props.items}/> } exact />
            <Route path='/cart' render={() => <Cart/> } exact />

            </div>
        </div>
            )
        }
    }
        
    
const mapStateToProps =  state => {
    return{
        items: state.products.items
    }
}


export default connect (mapStateToProps) (App)



