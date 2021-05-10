import React from 'react'
// import style from './category.css'
import './category.css'


function Category ({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(0)
    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className='category_wrapper'>
            <ul className='items'>

                {items.map((name, index)=>

                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{name}</li>)}


            </ul>

        </div>
    )
}

export default Category