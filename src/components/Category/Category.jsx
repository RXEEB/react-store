import React from 'react'
// import style from './category.css'
import './category.css'


export function Category ({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(0)

    return (
        <div className='wrapper'>
            <ul className='items'>

                {items.map((name, index)=>

                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)} key={`${name}_${index}`}>{name}</li>)}


            </ul>

        </div>
    )
}