const express = require('express');
const path = require('path');
const { exec } = require('child_process');
require('dotenv').config();

const osirisRouter = require('./src/routers/osirisRouter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/tests', osirisRouter);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});
// Start server & open in browser
if (require.main === module){
    const server = app.listen(PORT, () => {
        console.log(`API up on port ${PORT}`);
    });
}

module.exports = app;