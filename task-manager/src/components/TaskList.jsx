import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sortOption, setSortOption] = useState('creationDate');

    // Filter tasks based on the selected filter
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'Completed') return task.completed;
        if (filter === 'Incomplete') return !task.completed;
        return true;
    });

    // Sort tasks based on the selected sort option
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortOption === 'creationDate') return a.id - b.id;
        if (sortOption === 'priority') return b.priority - a.priority;
        return 0;
    });

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Completed')}>Completed</button>
            <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
            <ul>
                {sortedTasks.map((task) => (
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
