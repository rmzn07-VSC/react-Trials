import 'react';
import PropTypes from 'prop-types'; // Prop-types için import
import ToDo from './ToDo';

function ToDoList({ todos, onDelete, onEdit }) {
  return (
    <div className='todoList'>
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

ToDoList.propTypes = { // Prop validation ekledik
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ToDoList;