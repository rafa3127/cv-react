import React from 'react'
// import PropTypes from 'prop-types'
import BasicData from './../BasicData'
import Profile from './../Profile'
import Socials from './../Socials'
import './PersonalInfo.sass'

const PersonalInfo = ({img,name,professions, profile,email,phone,linksSN, cvLink}) => {
    return (
        <div className="personal-info">
            <div className="page-components">
                <BasicData img={img} name={name} professions={professions}/>
                <Profile profile={profile}/>
                <Socials email={email} phone={phone} linksSN={linksSN}/>

                <div className="ref">
                    <p>                    
                        (CV Diseñado con React. Versión Completa en <a href={cvLink}>{cvLink}</a> )
                    </p>
                </div>
            </div>
        </div>
    )
}

// PersonalInfo.propTypes = {

// }

export default PersonalInfo
