import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoComponent.css'; // Pastikan Anda menambahkan file CSS untuk animasi

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState('');

  

  // Menambahkan task baru
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Menghapus task
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Menandai task sebagai selesai atau kembali ke belum selesai
  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  // Mulai mengedit task
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditedText(todos[index].text);
  };

  // Menyimpan perubahan edit
  const saveEdit = (index) => {
    if (editedText.trim()) {
      setTodos(
        todos.map((todo, i) =>
          i === index ? { ...todo, text: editedText } : todo
        )
      );
      setEditingIndex(null);
      setEditedText('');
    }
  };

  // Filter todo berdasarkan searchText
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center p-5">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800">Todo List</h1>
        
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Search tasks..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Input Area for Adding Todo */}
        <div className="flex space-x-4">
          <input
            type="text"
            className="flex-1 px-5 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Add a new task"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            onClick={() => { 
              if (newTodoText.trim()) {
                addTodo(newTodoText);
                setNewTodoText('');
              }
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          <TransitionGroup>
            {filteredTodos.map((todo, index) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="todo-item"
                unmountOnExit
              >
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md transition duration-300">
                  {editingIndex === index ? (
                    <div className="flex space-x-2 w-full">
                      <input
                        type="text"
                        className="flex-1 px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                      <button
                        onClick={() => saveEdit(index)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingIndex(null)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <span
                        className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                      >
                        {todo.text}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleComplete(index)}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        >
                          {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                          onClick={() => startEdit(index)}
                          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTodo(index)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
