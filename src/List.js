import { useEffect, useState } from "react";

function List({ toDoList, setToDoList }) {
  const [cTaskExist, setCTaskExist] = useState(false);

  useEffect(() => {
    const tempArr = toDoList.filter(e => e.completed === true);
    if (tempArr.length !== 0)
      setCTaskExist(true);
    else
      setCTaskExist(false);
  }, [toDoList]);

  const changeCompleted = (id) => {
    const tempArr = [...toDoList];
    const task = tempArr.find(e => e.id === id);
    const index = tempArr.indexOf(task);

    const newTask = task;
    newTask.completed = !task.completed;
    tempArr[index] = newTask;

    setToDoList(tempArr);
  }

  const deleteCompletedTasks = () => {
    // eslint-disable-next-line
    if (confirm('Do you want to delete completed tasks?')) {
      const tempArr = toDoList.filter(e => e.completed === false);
      setToDoList(tempArr);
    }
  }

  return <div>
    <h3>To do tasks:</h3>
    <ul>
      {
        toDoList !== [] && toDoList.length > 0 && toDoList.map(t => {
          const { id, task, completed } = t;
          return <li key={`tdl-${id}`}>
            {
              completed === false &&
              <div>
                <input type="checkbox" checked={completed} onChange={() => changeCompleted(id)} />
                {task}
              </div>
            }
          </li>
        })
      }
    </ul>
    {cTaskExist && <h3>
      Completed tasks:
    </h3>}
    <ul>
      {
        toDoList !== [] && toDoList.length > 0 && toDoList.map(t => {
          const { id, task, completed } = t;
          return <li key={`tdl-${id}`}>
            {
              completed === true &&
              <div className="strike-through">
                <input type="checkbox" checked={completed} onChange={() => changeCompleted(id)} />
                {task}
              </div>
            }
          </li>
        })
      }
      {
        toDoList !== [] && toDoList.length > 0 && cTaskExist && <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
      }
    </ul>
  </div>
}

export default List;
