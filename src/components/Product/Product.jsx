import React from 'react'
import PropTypes from 'prop-types';
import './product.css'
import classNames from 'classnames'
import { FaCartPlus } from 'react-icons/fa';


function Product ({name ,img, price, category, types, colors}) {
console.log(name)
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
                        <button className="add-to-cart-btn"><i><FaCartPlus/></i>в корзину</button>
                    </div>
                </div>
            </div>
        </div>

    )
}



Product.propTypes = {
    name: PropTypes.string,
    img:PropTypes.string,
    category:PropTypes.string,
    types:PropTypes.arrayOf(PropTypes.number).isRequired,
    colors:PropTypes.array,
    price:PropTypes.number,
  };
  Product.defaultProps = {
    name: 'название отсутствует',
    img: 'изображене отсутствует',
    category: 'категория отсутствует',
    colors: 'цвет отсутствует',
    price: 'цена отсутствует',
    price: 'цена отсутствует',

  };

export default Product




