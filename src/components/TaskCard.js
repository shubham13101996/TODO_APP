import React, { useState} from "react";
const TaskCard=(props)=>{

    const[edit, setEdit] = useState(false)
    const[changeTask, setChangeTask] = useState('')


    // calls the API with DELETE method as soon as "Delete" Button is clicked
    const HandleDelete =(e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
          method: "DELETE",
        });
        e.target.parentElement.parentElement.remove()
        alert('task deleted')
      };


      // calls the API with PUT method as soon as the "Update" Button is clicked. 
    const HandleEdit = (e) => {
        if(!edit){
            setEdit(true)
        } else if(changeTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: `${e.target.value}`,
                title:  `${changeTask}`,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
                alert(`updated to task: ${json.title} `)});
            setEdit(false)
            setChangeTask('')
        } else{
            alert("No task changed")
            setEdit(false)
            setChangeTask('')
        }
    }



// edits change Task as the input field is changed
    const changeTodo =(e) =>{
        setChangeTask(e.target.value)
    }

    return(
        <div className="card">
            <div className={props.completed ? "completed" : "pending"}/>
            {edit ? <div className="taskInput">
                <input type="text" placeholder={props.title} onChange={changeTodo} className="taskText"/>
            </div>  : <div className="task"><span> {props.title}</span></div>}
            
            <div className="action">   
            <button value={props.id} onClick={HandleEdit} className="buttonImage">
                Update
            </button> 
            <button value={props.id}  onClick={HandleDelete} className="buttonImage">
                Delete 
            </button>
            </div>
        </div>
        
    )
}

export default TaskCard
