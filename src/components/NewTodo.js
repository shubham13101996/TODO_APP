import React, { useState} from "react";

const NewTodo = () => {
    const[newTask, setNewTask] = useState('')

    // calls the API with POST method as soon as "ADD" Button is clicked
    const AddNewTask = () => {
        if(newTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: `${newTask}`,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
            alert(`Your Task Added : -> ${json.title} `)});
            setNewTask('');
           
        } else{
            alert("Plz fill the Input Area")
           
        }
        
    }

// edits newTask as the input field is changed
    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    }
  return (
    <>
       <div className="newTask">
            <div className="newCard">                
                <input type="text" className="newInput" placeholder="Add New Task" value={newTask} onChange={handleNewTaskChange}/>
                <button className="buttonInput" onClick={AddNewTask}> Add </button>
            </div>
            
        </div>
    </>
  )
}

export default NewTodo
