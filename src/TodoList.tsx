import React, { useState, ChangeEvent } from 'react';

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");

    const addTask = (): void => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index: number): void => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={task} 
                onChange={handleChange}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t} <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;