import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ title, bgColor, color, aoClicar }) => {
  return (
    <button
      className="btn-default"
      style={{ backgroundColor: bgColor, color }}
      onClick={aoClicar}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  aoClicar: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "#a13854",
  color: "#fff",
};

export default Button;
