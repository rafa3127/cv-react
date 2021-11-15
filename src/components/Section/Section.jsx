import React from 'react'
import Item from '../Item'
import Title from '../Title'
import './Section.sass'

// import PropTypes from 'prop-types'

const renderItem = (item) => {
    return <Item key= {item.title} title = {item.title} institution = {item.institution} location = {item.location} date = {item.date} subItems = {item.subItems} />
}
const Section = ({icon, title, items}) => {
    return (
        <>
            <Title title={title} icon={icon}/>
            <div className="section-grid">
                {items.map(n=>renderItem(n))}
            </div>
        </>
    )
}

// Section.propTypes = {

// }

export default Section
