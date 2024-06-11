import React from 'react';
import {
    Container, Typography, Paper, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, TextField, Button
} from '@mui/material';
import { styled } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCard = styled(Card)({
    margin: '20px 0',
    padding: '10px'
});

function AggregatedDeviceStatus() {
    // Placeholder data
    const latestAlerts = [
        "Device001 showing unusual traffic patterns.",
        "Device005 failed to respond to health check.",
        "SolarWinds reported latency in Device007."
    ];

    return (
        <Container component="main" maxWidth="md">
            <Typography component="h1" variant="h4" gutterBottom>
                Aggregated Device Status
            </Typography>

            {/* Filter and Search */}
            <StyledCard>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Filters & Search</Typography>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <TextField label="Search Alerts" variant="outlined" style={{ flexGrow: 1, marginRight: '20px' }} />
                        <Button variant="contained" color="primary">Search</Button>
                    </div>
                </CardContent>
            </StyledCard>

            {/* Alerts List */}
            <StyledCard>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Latest Alerts</Typography>
                    <Divider />
                    <List>
                        {latestAlerts.map((alert, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <ErrorIcon />
                                </ListItemIcon>
                                <ListItemText primary={alert} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </StyledCard>

            {/* Graphs & Visualizations */}
            <StyledCard>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Device Health Over Time</Typography>
                    <Divider />
                    <div style={{ marginTop: '20px' }}>
                        {/* You'd integrate a charting library here to represent data over time */}
                        [Graph Placeholder]
                    </div>
                </CardContent>
            </StyledCard>

            {/* Additional sections can be added as needed */}
        </Container>
    );
}

export default AggregatedDeviceStatus;
