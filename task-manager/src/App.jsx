import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/task/:id" element={<TaskDetailPage />} />
        </Routes>
    </Router>
);

export default App;
