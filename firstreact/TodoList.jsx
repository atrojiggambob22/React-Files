import React,{useState} from 'react';



const TodoList = () => {
  const [tasks, SetTasks] = useState([])
  const [newTask, SetNewTask] = useState("")


  function handleEventChange(event){
    SetNewTask(event.target.value);
  }
  
  function addTask(){
    if(newTask.trim()!=="" ){
      SetTasks(t=> [...t, newTask]);
    SetNewTask("");
    }
      
  }

  function deleteTask(index){
   const updatedTask= tasks.filter((_, i)=> i!==index);
   SetTasks(updatedTask);
    
  }
  function moveTaskUp(index){
    if(index >0){t
      const updatedTask =[...tasks];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
      SetTasks(updatedTask);
    }

  }
  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTask =[...tasks];
      [updatedTask[index],updatedTask[index + 1]]=[updatedTask[index + 1],updatedTask[index]];
      SetTasks(updatedTask);
    }
  }

  return (
  <div  className='to-do-list'>
    <h1>To-Do-List</h1>

    <div>
      <input type="text"
      placeholder='Enter a Task'
      value={newTask}
      onChange={handleEventChange} />


      <button className='add-btn'
      onClick={addTask}>Add</button>

      <ol>
        {tasks.map((task, index)=>
        <li key={index}>
          {/* to do this we had to provide the index and task to map task to print the array of task into lines */}
          <span lassName='text'>{task}</span>
          <button className='delete-button' onClick={() =>deleteTask(index)}>Delete</button>
          <button className='move-button' onClick={() =>moveTaskUp(index)}>👆</button>
          <button className='move-button' onClick={() =>moveTaskDown(index)}>👇</button>
        </li>
      )}
      </ol>
    </div>
  
  </div>
    
    
  )
}

export default TodoList