import React from 'react'
import './product.css'
import classNames from 'classnames'
import { FaCartPlus } from 'react-icons/fa';


export function Product ({name ,img, price, category, types, colors}) {

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeColor, setActiveColor] = React.useState(colors[0]);

    const availableTypes =['Оригинал','Аналог']
    const availableColors =['Красный','Синий','Зеленый']



    const onSelectType = (index) =>{
        setActiveType(index)
    }
    const onSelectColor = (index) =>{
        setActiveColor(index)
    }


    return(
        <div className="product_wrapper">
            <div>
                <div className="product">
                    <div className="product-img">
                        <img src={img}  alt=""/>
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category">{category}</p>
                        <h3 className="product-name">{name} </h3>
                        <h4 className="product-price">{price} руб.</h4>
                        {/*<div className="product-rating">*/}
                        {/*    <i className="fa fa-star"><FaStar/></i>*/}
                        {/*    <i className="fa fa-star"><FaStar/></i>*/}
                        {/*    <i className="fa fa-star"><FaStar/></i>*/}
                        {/*    <i className="fa fa-star"><FaStarHalfAlt/></i>*/}
                        {/*</div>*/}
                        {/*<div className="product-btns">*/}
                        {/*    <button className="add-to-wishlist"><i className="fa fa-heart-o"><FaApple/></i><span className="tooltipp">apple</span>*/}
                        {/*    </button>*/}
                        {/*    <button className="add-to-compare"><i className="fa fa-exchange"><FaAndroid/></i><span className="tooltipp">android</span>*/}
                        {/*    </button>*/}
                        {/*    <button className="quick-view"><i className="fa fa-eye"><SiXiaomi/></i><span className="tooltipp">xiaomi</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*<div className="btn-wrapper">*/}
                        {/*    <div className="btn ">*/}
                        {/*        <button className="btn check">sdsd</button>*/}
                        {/*    </div>*/}
                        {/*    <div className="btn-mid">*/}
                        {/*        <button className="btn-mid">sdsds</button>*/}
                        {/*    </div>*/}
                        {/*    <div className="btn-right">*/}
                        {/*        <button className="btn">sdsds</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}



                        <div className="btn-wrapper bouncy">
                            <ul >

                                    {availableTypes.map((type, index)=> <li
                                        key={type}
                                        onClick={()=> onSelectType(index)}
                                        className={classNames({
                                            check: activeType === index,
                                            disabled: !types.includes(index),
                                        })}
                                    > {type}</li>)}

                            </ul>
                            <ul>
                                {availableColors.map((color, index)=> <li
                                    key={color}
                                    onClick={()=> onSelectColor(index)}
                                    className={classNames({
                                        check: activeColor === index,
                                        disabled: !colors.includes(color),
                                    })}
                                > {color}</li>)}

                            </ul>
                        </div>




                    </div>


                    <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"><FaCartPlus/></i>в корзину</button>
                    </div>
                </div>
            </div>
        </div>

    )

}