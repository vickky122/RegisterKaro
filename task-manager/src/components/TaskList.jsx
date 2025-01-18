import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'Completed') return task.completed;
        if (filter === 'Incomplete') return !task.completed;
        return true;
    });

    return (
        <div>
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Completed')}>Completed</button>
            <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
            <ul>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
