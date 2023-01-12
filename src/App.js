import React from 'react'
import NewTodo from './components/NewTodo'

const App = () => {
  return (
    <>
      <div className='App'>
          {/* To add new tasks */}
           <NewTodo/>
      </div>
    </>
  )
}

export default App
