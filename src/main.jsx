import React from 'react';
import ReactDOM from 'react-dom/client';
import EventList from './EventList';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><main className="container"><EventList /></main></React.StrictMode>
);
