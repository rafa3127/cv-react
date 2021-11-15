import React from 'react'
import Title from '../Title'
// import PropTypes from 'prop-types'

import "./Languages.sass"

const renderLenguage = (language) => {
    return (
    <h4 key={language.language}>
        {language.language} | <span>{language.level}</span>
    </h4>
    )
}
const Languages = ({languages}) => {
    return (
        <>
            <Title title="IDIOMAS" icon={["fas","language"]}/>
            <div className="languages container">
                {languages.map(n=>renderLenguage(n))}
            </div>
        </>
    )
}

// Languages.propTypes = {

// }

export default Languages
