import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashjk from './components/Dashjk';
import Login from './components/Login';
import AggregatedDeviceStatus from './components/AggregatedDeviceStatus';
import DeviceHealthSummary from './components/DeviceHealthSummary';
import AiFeature from './components/AiFeature';

import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import F5Status from './components/dashboard/F5';
import Overview from './components/dashboard/overview';
import Discovery42 from './components/dashboard/discovery42';

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
                            <Route path="/dashboard" element={<Dashboard />}>
                                <Route path="overview" element={<Overview />} />

                                <Route path="meter/:label" element={<F5Status />} />
                                <Route path="meter/Device42 Status" element={<Discovery42 />} />

                            </Route>
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
