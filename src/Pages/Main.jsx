import React from 'react'
import {Category} from "../components/Category/Category";
import {Product} from "../components/Product/Product";
import style from './main.module.css'


function Main() {
    return (
        <div>
            <Category onClickItem={(name) => console.log(name)} items={[
                'Все', 'Ноутбуки', 'Смартфоны', 'Фотоаппараты', 'Наушники'
            ]}/>
            <div className={style.grid}>

                {/*<div className={style.product_item}>*/}
                {/*    <Product/>*/}
                {/*</div>*/}
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>




            </div>


        </div>
    )
}

export default Main;