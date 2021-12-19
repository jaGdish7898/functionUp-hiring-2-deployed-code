import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {  //accepting props as arguments
    return (
        <>

          {tasks.map((task,index) => (
            <Task key={index} task={task} 
            onDelete={onDelete} 
            onToggle={onToggle} />
          ))} 
        </>
    )
}

export default Tasks  //default exports

