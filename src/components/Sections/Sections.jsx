import React from 'react'
import Section from '../Section/Section'
import './Sections.sass'
// import PropTypes from 'prop-types'

const renderSection = (section) =>{
    return <Section key={section.title} title = {section.title} icon = {section.icon} items = {section.items} />
}
const Sections = ({sections}) => {
    return (
        <div className="sections">
            {sections.map(n => renderSection(n))} 
        </div>
    )
}

// Sections.propTypes = {

// }

export default Sections
