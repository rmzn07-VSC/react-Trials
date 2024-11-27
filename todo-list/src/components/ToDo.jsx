import { useState } from 'react'; // useState import edildi
import PropTypes from 'prop-types'; // Prop-types için import
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function ToDo({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.content);
  };

  return (
    <div className='ToDo'>
      <div>
        {isEditing ? (
          <>
            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
            <button onClick={handleSaveEdit}>Kaydet</button>
            <button onClick={handleCancelEdit}>İptal</button>
          </>
        ) : (
          todo.content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={() => onDelete(todo.id)} />
        <FaEdit className='todo-icons' style={{ marginBottom: '2px' }} onClick={handleEdit} />
      </div>
    </div>
  );
}

ToDo.propTypes = { // Prop validation ekledik
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ToDo;