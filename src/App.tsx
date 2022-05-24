import React, { FC, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log("~ todos", todos);
  return (
    <div className="App">
      <span className='heading'>TaskTS</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
