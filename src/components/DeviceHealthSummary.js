import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function DeviceHealthSummary() {
    // Mock data for demonstration. In a real-world application, this would come from your API.
    const deviceStatusSummary = {
        good: 10,
        warning: 5,
        critical: 2
    };

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column">
            <Typography variant="h6" gutterBottom>
                Device Health Summary
            </Typography>

            <Button variant="contained" style={{ backgroundColor: 'red', marginBottom: '10px' }}>
                Critical: {deviceStatusSummary.critical}
            </Button>
            <Button variant="contained" style={{ backgroundColor: 'orange', marginBottom: '10px' }}>
                Warning: {deviceStatusSummary.warning}
            </Button>
            <Button variant="contained" style={{ backgroundColor: 'green' }}>
                Good: {deviceStatusSummary.good}
            </Button>
        </Box>
    );
}

export default DeviceHealthSummary;
