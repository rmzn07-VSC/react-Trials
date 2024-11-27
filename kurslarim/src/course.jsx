//  Course.jsx 
import "react";
import PropTypes from "prop-types";
import './css/Course.css';

function Course({ course }) {
  // eslint-disable-next-line no-unused-vars
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course-main"> 
      <div className="course">
        <img src={image} width={250} height={150} />
        <h4 className="course-title">{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        <div className="button-container">  {/*  `button-container`  sınıfını  ekledik  */} 
          <button  className="course-button"  onClick={() => window.location.href = link}> {/*  `<button>`  etiketi kullanılıyor */ } 
            Satın Almak İçin
          </button> 
        </div> 
      </div>
    </div>
  );
}

Course.propTypes = { 
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
  }).isRequired,
}; 
export default Course;