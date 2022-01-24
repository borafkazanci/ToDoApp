
function Form({ task, setTask, addToList }) {

  const sendTaskAdd = () => {
    if (task === "")
      alert('First, you should enter a task!');
    else
      addToList();
  }

  return <>
    <label>Enter a task to do: </label>
    <input
      className="ml-10"
      placeholder="Task..."
      value={task}
      onChange={e => setTask(e.target.value)}
    />
    <button
      className="ml-10"
      onClick={sendTaskAdd}
    >
      Add to To Do List
    </button>
  </>
}

export default Form;
