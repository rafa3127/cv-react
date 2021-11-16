import React from 'react'
// import img from "../../img/Rafael-Correa.webp"

// import PropTypes from 'prop-types'
import './BasicData.sass'

const BasicData = ({ img, name, professions}) => {

    const renderProfessions = (prof) => <h3 key={`${prof}`}>{prof}</h3>
    return (
        <>
            <div className="img-container">
            </div>
            <div className="basic-info">
                <h1>{name}</h1>
                {professions.map(n =>renderProfessions(n))}
            </div>
        </>
    )
}

// BasicData.propTypes = {

// }

export default BasicData
