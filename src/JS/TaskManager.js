import React,{ useState, useEffect }from 'react';
const TaskManager=() => {
    const [task, setTasks] = useState([]);
    const [input, setInputValue] = useState('');
    useEffect(()=>{
        const initialTasks=[
            { id: 1,text: 'Buy groceries',completed: false},
            { id: 2,text: 'Writecode', completed: false },
        ];
        setTasks(initialTasks);
    },[]);
const addTask=()=>{
    if(inputValue.trim()!==''){
        const newTask={
            id:Datenow(),
            text:inputValue,
            completed:false,
        };
        setTasks({...tasks,newTask});
        setInputValue('');
    }
};
const removeTask = (taskId) => {
    const updatedTask = task.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
 };
 const toggleTaskStauts = (taskId) => {
    const updatedTasks=tasks.map((task) => {
        if(task.id === taskId){
            return {...task,completed: !task.completed};
        }
        return task;
    });
    setTasks(updatedTasks);
};
return(
    <div classname="container">
        <h1>Task Manager App</h1>
        <div>
            <input
               type="text"
               placeholder="Add a new task.."
               value={inputValue}
               onChange={(e)=>setInputValue(e.target.value)}></input>
        </div>
    </div>
)}