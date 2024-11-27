// Button.jsx

import "react";
import PropTypes from "prop-types"; 

function Buton(props) {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.renk, padding: "10px" }}>
      {props.baslik}
    </button>
  );
}

Buton.propTypes = {
  onClick: PropTypes.func,
  baslik: PropTypes.string.isRequired,
  renk: PropTypes.string.isRequired,
};

export default Buton;