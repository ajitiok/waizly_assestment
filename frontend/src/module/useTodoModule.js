import { useState } from 'react';

const useTodoModule = () => {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState('');

  const filteredTodos = () => {
    return todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()));
  };

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    if (newText) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = newText;
      setTodos(updatedTodos);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return {
    addTodo,
    toggleComplete,
    deleteTodo,
    editTodo,
    handleSearch,
    filteredTodos
  };
};

export default useTodoModule;
