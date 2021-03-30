import React from 'react'

import {Product} from "../components/Product/Product";
import style from './main.module.css'
import Category from "../components/Category/Category";


function Main({items}) {

    return (
        <div>
            <Category
                onClickItem={(name) => console.log(name)}  items={[
                'Все', 'Ноутбуки', 'Смартфоны', 'Наушники'
            ]}
            />
            <div className={style.grid}>

                {items.map((obj) => <Product  {...obj}/>)}

            </div>


        </div>
    )
}

export default Main;