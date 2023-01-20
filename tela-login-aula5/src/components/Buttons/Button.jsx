import PropTypes from 'prop-types'
/*function Button({value, onClick}){
return(
    <>
    <button className="submit" onClick={onClick}> {value} </button>
    </>
)
}*/

const Button = ({value, onClick})=>{
return(
    <>
    <button className="submit" onClick={onClick}> {value} </button>
    </>
)
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
}

Button.defaultProps = {
    bgColor: "#cdcdcd",
    color: "#fff"
}

export default Button