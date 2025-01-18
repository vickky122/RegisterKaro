import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, updateTask, deleteTask }) => (
    <li>
        <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
            {task.title}
        </span>
        <button onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
);

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
