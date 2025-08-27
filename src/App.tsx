import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Copyright from './components/Copyright';
import NavigationBar
 from './components/NavigationBar';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import OfficersPage from './pages/OfficersPage';
import Error404 from './pages/Error404';

function App() {

  return (
    <Router>
      <NavigationBar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
      <Copyright />
    </Router>
  )
}

export default App
