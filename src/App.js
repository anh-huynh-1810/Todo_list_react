import TodoList from "./components/TodoList"
import TextField from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import { useCallback, useEffect, useState } from "react";
import {v4} from "uuid";

const TODO_APP_STORE_KEY = "todolistappmakebyme^.^"
function App() {
  //state is all values in this component.
  //props is values in parameter in father's component.
  const [todoList, setTodoList] = useState([])
  const [textInput, setTexInput] = useState('')
  
  useEffect(() =>{
    const store = localStorage.getItem(TODO_APP_STORE_KEY)
    if(store){
      setTodoList(JSON.parse(store))
    }
  },[])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORE_KEY, JSON.stringify(todoList))
  }, [todoList])

  const onTextInputChange = useCallback((e) =>{ 
    setTexInput(e.target.value)
  }, [])

  const onAddButtonClick = useCallback((e) =>{
    setTodoList(
      [{
          id :v4(),
          name: textInput, 
          isCompleted: false
        }, 
        ...todoList
      ]);
    setTexInput('');
  }, [textInput, todoList])

  const onCheckBtnLick = useCallback((id) =>{
    setTodoList(
      prevState => prevState.map(
        todo => todo.id === id? {...todo, isCompleted: true } : todo
      )
    )
  }, [])

  const onTrashBtnLick = useCallback((id) =>{
    let indexForRemove = null;
    todoList.every((todo, index) => {
      if (todo.id !== id){
        return true
      }
      indexForRemove = index; 
      return false 
    });

    if(indexForRemove === null){
      return todoList
    } 
    todoList.splice(indexForRemove,1);
    setTodoList([...todoList])
  }, [todoList])


  return (
    <>
      <h3>ToDo list app</h3>
      <TextField 
        name="add-todo" 
        placeholder="Add a new work ..." 
        elemAfterInput={
          <Button isDisabled={!textInput} appearance="primary" onClick={onAddButtonClick}>Add</Button>
        }
        css={{padding: "2px 4px 2px"}}
        value = {textInput}
        onChange={onTextInputChange}
      ></TextField>

      <TodoList 
        todoList={todoList} 
        onCheckBtnLick={onCheckBtnLick} 
        onTrashBtnLick={onTrashBtnLick}
      />
    </>
  );
}

export default App;
