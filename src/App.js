import React,  { useState, useEffect } from 'react'
import NewTodo from './components/NewTodo'
import TaskCard from './components/TaskCard';

const App = () => {

  const [items, setitems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  
  // fetches the taks list from API as soon as the window is loaded and stores the response in an array
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => 
    setitems(json),
    setDataisLoaded(true),
    console.log(items)
  )
  },[items]);

  return (
    <>
      <div className='App'>
          {/* To add new tasks */}
           <NewTodo/>

           <h2 className="heading">All Tasks</h2>

      {/* iterates through the array and calls TaskCard and sends the required details as props */}
      {
          items.map((item) => ( 
            <TaskCard 
              key={item.id}
              title={item.title} 
              completed = {item.completed}
              id={item.id}
            />
          
          ))
        }
      </div>
    </>
  )
}

export default App
