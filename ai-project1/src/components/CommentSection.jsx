import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'; // axios import edildi

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments/${postId}`); //Backend API endpoint
        setComments(response.data);
      } catch (error) {
        console.error("Yorumları alırken hata:", error);
      }
    };

    fetchComments();
  }, [postId]);


  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!newComment) return;

      try{
          const response = await axios.post('/api/comments',{postId, newComment});
          setComments([...comments,response.data])
          setNewComment('')
      } catch(error){
          console.error("Yorum gönderirken hata:",error)
      }
  }

  return (
    <div className="comment-section">
      <h2>Yorumlar</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.author}:</strong> {comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Yorumunuzu buraya yazın..."></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentSection;