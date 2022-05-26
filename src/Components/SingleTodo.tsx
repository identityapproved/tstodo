import './styles.css';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
   index: number,
   todo: Todo,
   todos: Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: FC<Props> = ({ index, todo, todos, setTodos }) => {
   const [edit, setEdit] = useState<Boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(todo.todo);
   const inputRef = useRef<HTMLInputElement>(null);

   const handleDone = (id: number) =>
      setTodos(todos.map((todo) =>
         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      ));

   const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const handleEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      setTodos(todos.map((todo) =>
         todo.id === id ? { ...todo, todo: editTodo } : todo
      ));
      setEdit(false);
   };

   useEffect(() => {
      inputRef.current?.focus();
   }, [edit]);


   return (
      <Draggable draggableId={todo.id.toString()} index={index}>
         {(provided, snapshot) => (

            <form
               className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
               onSubmit={(e) => handleEdit(e, todo.id)}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
            >
               {edit ? (
                  <input
                     value={editTodo}
                     onChange={(e) => setEditTodo(e.target.value)} className='todos__single--text'
                  />
               ) : todo.isDone ? (
                  <s className='todos__single--text'>{todo.todo}</s>
               ) : (
                  <span className='todos__single--text'>{todo.todo}</span>
               )}


               <div>
                  <span className='icon' onClick={() => handleDone(todo.id)}><MdDoneOutline /></span>
                  <span className='icon' onClick={() => {
                     if (!edit && !todo.isDone) {
                        setEdit(!edit);
                     }
                  }
                  }
                  >
                     <RiEdit2Fill />
                  </span>
                  <span className='icon' onClick={() => handleDelete(todo.id)}><RiDeleteBin2Fill /></span>
               </div>
            </form>
         )}
      </Draggable>
   );
};

export default SingleTodo;