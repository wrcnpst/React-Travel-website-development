const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Gateway started on port ${PORT}`)
})