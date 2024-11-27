import { useState } from 'react';
import PropTypes from 'prop-types'; // Prop-types import edildi.
import '../App.css';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    setNewTodo(''); 
  };

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className='todo-input'
        type="text"
        placeholder='Görev giriniz...'
      />
      <button onClick={createTodo} className='todo-create-button'>Görev Oluştur</button>
    </div>
  );
}

TodoCreate.propTypes = { // Prop validation eklendi
  onCreateTodo: PropTypes.func.isRequired,
};

export default TodoCreate;