import 'react';
import PropTypes from 'prop-types'; // PropTypes import edildi

function PostPreview({ post }) {
  return (
    <div className="post-preview">
      <h3>{post.title}</h3>
      <p>{post.shortDescription}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
}

PostPreview.propTypes = { // Prop validation eklendi
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;