import './styles.css';
import React, { FC } from 'react';
import { Todo } from '../model';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';

type Props = {
   todo: Todo,
   todos: Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: FC<Props> = ({ todo, todos, setTodos }) => {
   return (
      <form className='todos__single'>
         <span className='todos__single--text'>{todo.todo}</span>
         <div>
            <span className='icon'><RiEdit2Fill /></span>
            <span className='icon'><RiDeleteBin2Fill /></span>
            <span className='icon'><MdDoneOutline /></span>
         </div>
      </form>
   );
};

export default SingleTodo;