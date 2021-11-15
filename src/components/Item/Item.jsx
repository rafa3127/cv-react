import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import './Item.sass'
// import PropTypes from 'prop-types'
const renderSubtitle = (location,institution) => {
    if(location && location !== ""){
        return (
            <h4>
                {institution.toString().toUpperCase()} (<FontAwesomeIcon className="icon" icon = {["fas","map-marker-alt"]} /> {location})
            </h4>
        )
    }else{
        return (
            <h4>

                {institution.toString().toUpperCase()}
            </h4>
        )
    }
}

const renderSubitem = (subItem,index) => {
    return (
        <p className="subItem" key={index}>
            <FontAwesomeIcon className='icon' icon={["fas","dot-circle"]}/>
            {subItem}
        </p>
    )
}



const Item = ({title, institution,location, date, subItems}) => {
    const [descState,descFunction] = useState("")
    return (
        <div className={`container item  ${descState}`}>
            <h3>
                <FontAwesomeIcon className="down" onClick={() => descFunction("open")} icon={["fas", "chevron-down"]} />
                <FontAwesomeIcon className="up" onClick={() => descFunction("")} icon={["fas", "chevron-up"]} />
                {title.toString().toUpperCase()}
            </h3>
            {renderSubtitle(location,institution)}
            <p className="date">
                <FontAwesomeIcon icon={["fas","calendar-alt"]}/> {date}
            </p>
            <div className={`description ${descState}`}>
                {subItems.map(n=>renderSubitem(n, subItems.indexOf(n)))}
            </div>

        </div>
    )
}

// Item.propTypes = {

// }

export default Item
