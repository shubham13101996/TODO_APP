import React from 'react'

const NewTodo = () => {
  return (
    <>
       <div className="newTask">
            <div className="newCard">                
                <input type="text" className="newInput" placeholder="Add New Task"/>
                <button className="buttonInput" >Add  </button>
            </div>
            
        </div>
    </>
  )
}

export default NewTodo
