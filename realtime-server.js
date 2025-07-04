const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('Realtime Device Tracking Server');
});

// Simulate location updates
setInterval(() => {
    const latitude = 20.5937 + Math.random() * 0.1 - 0.05; // Random latitude near India
    const longitude = 78.9629 + Math.random() * 0.1 - 0.05; // Random longitude near India
    io.emit('locationUpdate', { latitude, longitude });
}, 2000); // Send updates every 2 seconds

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
