import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

const Todos = () => {
  // const todos = [
  //   { id: '1', text: 'Practice more' },
  //   { id: '2', text: 'Get all tasks done on time' },
  // ];

  // const [todo, setTodo] = useState(todos);

  const initialTodo = [
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ];

  const [todo, setTodo] = useState(() => {
    const savedData = localStorage.getItem('myTodos');
    return savedData ? JSON.parse(savedData) : initialTodo;
  });

  const addNewTodo = inputValue => {
    const newTodo = {
      id: nanoid(4),
      text: inputValue,
    };
    // console.log(newTodo);
    // setTodo([...todo, newTodo]);
    setTodo(prev => {
      return [...prev, newTodo];
    });
  };

  // useEffect(() => {}, []);
  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todo));
  }, [todo]);

  const deleteTodo = todoId => {
    setTodo(prev => {
      return prev.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {!todo.length && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList todoArray={todo} onDelete={deleteTodo} />
    </>
  );
};

export default Todos;
