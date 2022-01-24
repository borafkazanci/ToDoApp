import './App.css';
import List from './List';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [toDoTask, setToDoTask] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [id, setId] = useState(1);

  const addToList = () => {
    const newItem = {
      id: id,
      task: toDoTask,
      completed: false
    }

    const tempArr = [...toDoList];
    tempArr.push(newItem);
    setToDoList(tempArr);

    const newId = id + 1;
    setId(newId);
    setToDoTask('');
  }

  return (
    <div>
      <div className="App">
        <h2>To Do List</h2>
        <Form task={toDoTask} setTask={setToDoTask} addToList={addToList} />
      </div>
      <div className='center-content'>
        <List toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
}

export default App;
