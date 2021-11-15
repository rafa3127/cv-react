import React from 'react'
import Title from '../Title'
import "./Skills.sass"
// import PropTypes from 'prop-types'
const rendersubItems = (subItem) => {
    return (
        <p key={subItem}>-{subItem}</p>
    )
}

const renderItem = (item) => {
    if(item.level!==""&&item.subItems.length == 0){
        return (<h4 key = {item.title}>{item.title} | <span>{item.level}</span></h4>)
    }
    if(item.level==""&&item.subItems.length == 0){
        return (<h4 key = {item.title}>{item.title}</h4>)
    }
    if(item.level==""&& item.subItems.length > 0){
        return (
            <div key = {item.title}>
                <h4 key = {item.title}>{item.title}</h4>
                {item.subItems.map((n)=>rendersubItems(n))}
            </div>
        )
    }
}
const renderGroup = (group) => {
    return (
        <div className="group" key={group.title}>
            <h3>{group.title}</h3>
            {group.items.map((n)=>renderItem(n))}
        </div>
    )
}


const Skills = ({groups}) => {
    return (
        <div className="skills">
            <Title title="HERRAMIENTAS Y HABILIDADES" icon={["fas","tools"]}/>
            {groups.map((n)=>renderGroup(n))}
        </div>
    )
}

// Skills.propTypes = {

// }

export default Skills
