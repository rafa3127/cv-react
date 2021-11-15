import React from 'react'
import Title from '../Title'
// import PropTypes from 'prop-types'
import './Profile.sass'

const Profile = ({profile}) => {
    return (
        <>
            <Title icon={["fas","user"]} title="Perfil" />
            <p className="profile-text">{profile}</p>   
        </>
    )
}

// Profile.propTypes = {

// }

export default Profile
