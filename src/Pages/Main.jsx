import React from 'react'

import Product from "../components/Product/Product";
import style from './main.module.css'
import Category from "../components/Category/Category";
import Sort from '../components/SortPopUP/SortPop'
import { useSelector, useDispatch} from "react-redux";

function Main() {
    const dispatch = useDispatch()
    const items = useSelector(({products}) => products.items )




    return (
        <>
            <div className={style.subheader}>
            <Category
                onClickItem={(name) => console.log(name)}  items={[
                'Все', 'Ноутбуки', 'Смартфоны', 'Наушники'
            ]}
            />
            <div className={style.sort}>
                <Sort items ={[
                {name: 'по пулярности', type: 'bestseller' },
                {name: 'по цене', type: 'price' },
                {name: 'по алфавиту', type: 'alphabet' }]}/>

                


            </div>

            </div>
            <div className={style.grid}>

                {items.map((obj) => <Product key = {obj.id} {...obj} />)}

            </div>
        </>
    )
}

export default Main;