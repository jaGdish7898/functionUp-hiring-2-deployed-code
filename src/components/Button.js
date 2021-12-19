import PropTypes from 'prop-types'


const Button = ({color,text,onClick}) => {
    return(
        <button 
            onClick={onClick} 
            style={{backgroundColor:color}} className='btn'
        >
            {text}
        </button>

    )
}

//default props

Button.defaultProps={
    color:'steelblue'
}

// we can defined type of props we want

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button
