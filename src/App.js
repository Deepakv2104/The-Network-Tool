import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashjk from './components/Dashjk';
import Login from './components/Login';
import AggregatedDeviceStatus from './components/AggregatedDeviceStatus';
import DeviceHealthSummary from './components/DeviceHealthSummary'; 
import AiFeature from './components/AiFeature';

import './App.css'
import Dashboard from './components/Dashboard';
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    {loggedIn ? (
                        <Routes>
                            <Route path="/status" element={<AggregatedDeviceStatus />} />
                            <Route path="/device-health-summary" element={<DeviceHealthSummary />} />
                            <Route path="/" element={<Dashboard/>} />

                            <Route path="/ai-feature" element={<AiFeature />} />
                        </Routes>
                    ) : (
                        <Login onLogin={() => setLoggedIn(true)} />
                    )}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

