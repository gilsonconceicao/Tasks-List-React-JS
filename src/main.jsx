import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TasksProviderContext } from './contexts/TasksContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TasksProviderContext>
        <div>
          <App />
        </div>
      </TasksProviderContext>
  </React.StrictMode>
)
