//rafce=>to get boiler plate of component designing

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {
   
    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? "orange" : "green"} text={showAdd ?"closeit" : "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps={
    title:"Task Tracker",
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header






// Header.defaultProps={
//     title:"Task Tracker"
// }

// Header.propTypes={
//     title:PropTypes.string.isRequired
// }

// export default Header



