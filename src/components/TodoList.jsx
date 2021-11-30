import React from 'react';
import Todo from './Todo';
const TodoList = ({todoList, onCheckBtnLick, onTrashBtnLick}) => {
  return (
    <>
    {
      todoList.map(
        (td) => 
        <Todo 
          key={td.id} 
          todo ={td}
          onCheckBtnLick={onCheckBtnLick}
          onTrashBtnLick={onTrashBtnLick}
        />
      )
    }
    </>
  );
};

export default TodoList;