//  Kutu.jsx

import 'react';
import PropTypes from "prop-types";

function Kutu(props) {
  return (
    <div style={{ backgroundColor: props.renk, padding: "10px" }}>
      <h3>{props.baslik}</h3>
      <p>{props.icerik}</p>
    </div>
  );
}

Kutu.propTypes = {
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string.isRequired,
  renk: PropTypes.string.isRequired,
};

export default Kutu;