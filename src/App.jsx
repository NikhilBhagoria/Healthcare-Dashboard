import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <div className='dashboard-wrapper'>
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;