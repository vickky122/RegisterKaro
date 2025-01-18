import { render, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';

test('renders task and toggles completion', () => {
    const task = { id: 1, title: 'Test Task', completed: false };
    const updateTask = jest.fn();
    const deleteTask = jest.fn();

    const { getByText } = render(
        <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    fireEvent.click(getByText('Mark Complete'));
    expect(updateTask).toHaveBeenCalledWith(1, { ...task, completed: true });
});
