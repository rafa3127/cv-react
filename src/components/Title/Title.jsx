import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Title.sass'

// import PropTypes from 'prop-types'

const Title = ({ icon, title }) => {
    return (
        <>
            <h2 className="title">
                <FontAwesomeIcon icon={icon} />
                {` ${title}`}
            </h2>
        </>
    )
}

// Title.propTypes = {

// }

export default Title
