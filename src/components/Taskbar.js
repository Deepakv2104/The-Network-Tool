import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';

const Taskbar = ({ onQuerySubmit }) => {
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedTask, setSelectedTask] = useState('');

  const tasks = [
    { label: 'Certs', value: 'certs' },
    { label: 'Pre-post checks', value: 'pre-post-checks' },
    { label: 'Tacas updates', value: 'tacas-updates' },
    { label: 'ACI Management', value: 'aci-management' },
    // Add more tasks as needed
  ];

  // Handler for submitting the query
  const handleQuerySubmit = () => {
    if (selectedTool && selectedTask) {
      onQuerySubmit(`Tool: ${selectedTool}, Task: ${selectedTask}`);
    }
  };

  return (
    <Paper style={{ padding: '20px', marginBottom: '20px' }}>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Select a Tool</InputLabel>
        <Select value={selectedTool} onChange={(e) => setSelectedTool(e.target.value)}>
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="device42">Device42</MenuItem>
          <MenuItem value="solarwinds">SolarWinds</MenuItem>
          <MenuItem value="corvil">Corvil</MenuItem>
          {/* Add more tool options as needed */}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Select a Task</InputLabel>
        <Select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
          <MenuItem value=""><em>Select a Task</em></MenuItem>
          {tasks.map((task) => (
            <MenuItem value={task.value} key={task.value}>
              {task.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Add a button or other UI element to trigger handleQuerySubmit if needed */}
    </Paper>
  );
};

export default Taskbar;