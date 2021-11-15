import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Title from '../Title'
import './Socials.sass'
// import PropTypes from 'prop-types'

const Socials = ({email, phone, linksSN }) => {
    const renderLink = link => <a className="link" key={link.link} href={link.link}><FontAwesomeIcon icon={link.icon}/></a>
    return (
        <div className="contact">
            <Title title="Contacto y Redes Profesionales" icon={["fas","users"]} />
            <p className="contact-paragraph">
                <FontAwesomeIcon icon={["far","envelope"]}/> {email}
            </p>
            <p className="contact-paragraph">
                <FontAwesomeIcon className="icon" icon={["fas","phone"]}/> {phone}
            </p>
            <div className="links">
                {linksSN.map(n=>renderLink(n))}
            </div>
        </div>
    )
}

// Socials.propTypes = {

// }

export default Socials
