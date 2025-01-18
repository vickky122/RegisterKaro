# Task Management Application

## Deployment Link
[Task Management App](https://register-karo-nine.vercel.app/)

https://register-karo-nine.vercel.app/
## Project Overview
This is a Task Management Application designed to manage tasks effectively. The application includes functionality to create, update, delete, and filter tasks. It is responsive and follows best practices in UI/UX design, state management, and routing.

---

## Features
### Core Functionality:
- **Create, update, and delete tasks**: Easily manage your task list.
- **Mark tasks as complete or incomplete**: Track task progress.
- **Filter tasks**: View all tasks, completed tasks, or incomplete tasks.
- **Sort tasks**: Sort tasks by creation date or priority.

### State Management:
- Utilizes React's `useState` and `useEffect` hooks for effective state management.

### Routing:
- **Home Page**: Displays the task list.
- **Task Detail Page**: Shows detailed information about a selected task.

### UI/UX Design:
- Responsive design for both mobile and desktop screens.
- Optimized for PageSpeed Insights with a score of 90+ for both mobile and desktop.

### Code Quality:
- Modular and reusable components.
- Prop validation using `PropTypes`.

### Bonus Features:
- Drag-and-drop functionality for reordering tasks.
- Persistence of tasks using local storage.
- Animations for task transitions.

---

## Directory Structure
```
└── vickky122-registerkaro/
    └── task-manager/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── vercel.json
        ├── vite.config.js
        ├── .gitignore
        ├── public/
        └── src/
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── assets/
            ├── components/
            │   ├── TaskItem.jsx
            │   ├── TaskList.css
            │   ├── TaskList.jsx
            │   └── test/
            │       └── TaskItem.test.jsx
            └── pages/
                ├── HomePage.jsx
                └── TaskDetailPage.jsx
```

---

## Tools & Libraries Used
- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Vite**: For fast development and optimized builds.
- **PropTypes**: For prop validation.
- **CSS**: For styling.
- **Vercel**: For deployment.
- **Jest** and **React Testing Library**: For testing components.

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/vickky122-registerkaro/task-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application locally:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Testing
To run unit tests for components:
```bash
npm test
```

---

## Thought Process
1. **Core Functionality**: Focused on implementing essential CRUD operations for tasks.
2. **UI/UX Design**: Ensured responsiveness and alignment with provided design.
3. **State Management**: Leveraged React hooks for seamless data handling.
4. **Code Quality**: Used modular and reusable components to enhance maintainability.
5. **Testing**: Added unit tests for critical components to ensure reliability.

---

## PageSpeed Insights Score
- **Mobile**: 90+
- **Desktop**: 90+

---

## Future Improvements
- Integrate a backend API for task management.
- Enhance drag-and-drop functionality with libraries like `react-beautiful-dnd`.
- Add user authentication for personalized task management.

---

## Contact
For queries or suggestions, feel free to contact:
- **Name**: Vikrant Kumar Yadav
- **Email**: vikrantmani45@gmail.com

