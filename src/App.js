import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [show, setShow] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appintment',
      day: 'Feb 5th at 3:40pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Gim appintment',
      day: 'Feb 6th at 3:40pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Varsity appintment',
      day: 'Feb 7th at 3:40pm',
      reminder: false,
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle task
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  // Add task
  const addtask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={(e) => setShow(!show)} showAdd={show} />
      {show && <AddTask onSave={addtask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder}
        />
      ) : (
          'No task To Show'
        )}
    </div>
  );
}

export default App;
