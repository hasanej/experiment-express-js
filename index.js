const express = require('express');
const app = express();

//Port
const port = 5000 || process.env.PORT;
app.listen(port, () => console.log('Listening to the port', port))
