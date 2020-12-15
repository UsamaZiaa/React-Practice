import { useEffect, useState } from 'react'
import { useWidth } from './hooks/useWidth';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { useTodo } from './hooks/useTodo';

function App() {
  const width = useWidth()
  const changeTitle = useDocumentTitle("Todo App");
  const [item, setItem] = useState('');
  const [todo, { addTodo, deleteTodo }] = useTodo([])
    
  useEffect(() => {
    changeTitle(`Todo App - item ${todo.length}`)
   }, [todo])

  const onAddItem = () => {
    addTodo(item)
    setItem('')
  }

  const onInputChange = (event) => {
    setItem(event.target.value)
  }

  const onDelete = (index) => {
    deleteTodo(index);
  }

  return (
    <div>
      <p>Window Size: {width}</p>
      <h1>Hello Usama</h1>
      <input value={item} onChange={onInputChange} />
      <button onClick={onAddItem}>Add Item</button>
      {todo.map((item, index) =>{
        return <li key={index}>
        {item}{' '}  
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
      })}   
    </div>
  );
}

export default App;