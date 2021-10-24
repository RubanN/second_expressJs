const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const logger = require('./middleware/logger.js')

app.listen(PORT, () => console.log(`Server listening on port${PORT}`)); // port is running on  3000
//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Init middleware
// app.use(logger)


// app.get('/', (req, res) => {
//     res.send("<h1>Hello world</h1>")   // send a <h1>Tags</h1>
// })
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));             // index.html file join 
// })
// set static folder 



app.use(express.static(path.join(__dirname, 'public')))    //static folder 
//Members API Routes
app.use('/api/members', require('./routes/api/members'))


