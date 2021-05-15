import React from "react";
import { BiDownArrow} from "react-icons/bi";
import style from './Sortpopup.module.css'


function Sort({items}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [activeItem, setActiveItem] = React.useState(0)
    const sortRef = React.useRef()
    const activeLabel = items[activeItem].name

    const toggleVisiblePopup = () => {setVisiblePopup(!visiblePopup)}
    const handleOutsideClick = (e) =>{
        if(!e.path.includes(sortRef.current)){
            setVisiblePopup(false)

        }

    }
    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    React.useEffect(()=>{
    document.body.addEventListener('click',handleOutsideClick)
    },[visiblePopup])


    return (
        <div ref= {sortRef} className={style.sort}>
            <div className={style.sort__label}>
                <BiDownArrow/>
                <b>Сортировка :</b>

                <span onClick={toggleVisiblePopup}>Хит продаж</span>
            </div>
            {visiblePopup &&
            <div className={style.sort__popup}>
                <ul>
                    
                    {items.map((obj, index)=>

                    <li
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? style.active : ''}
             key={`${obj.type}_${index}`}> {obj.name}</li>)}
                </ul>
            </div>
            }
        </div>

    )
}


export default Sort