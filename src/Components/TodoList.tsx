import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
   completedTodos: Todo[];
   setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
   return (
      <div className='container'>
         <Droppable droppableId='TodosList'>
            {(provided, snapshot) => (
               <div
                  className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
               >
                  <span className='todos__heading'>Active Tasks</span>
                  {todos.map((todo, index) => (
                     <SingleTodo
                        index={index}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                     />
                  ))}
                  {provided.placeholder}
               </div>
            )
            }
         </Droppable >

         <Droppable droppableId='TodosRemove'>
            {(provided, snapshot) => (
               <div
                  className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
               >
                  <span className='todos__heading'>Complited Tasks</span>
                  {completedTodos.map((todo, index) => (
                     <SingleTodo
                        index={index}
                        key={todo.id}
                        todo={todo}
                        todos={completedTodos}
                        setTodos={setCompletedTodos}
                     />
                  ))}
                  {provided.placeholder}
               </div>
            )}

         </Droppable>

      </div >

   );
};

export default TodoList;