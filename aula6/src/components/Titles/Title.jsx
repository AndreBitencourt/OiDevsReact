import PropTypes from 'prop-types'

const Title = (props) => {
    return (<h2>{props.titulo}</h2>)
}

Title.propTypes = {
    text: PropTypes.number
}

export default Title