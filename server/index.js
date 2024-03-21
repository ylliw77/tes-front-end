const express = require('express');
const PORT = 3000 || process.env.PORT
const app = express()
const cors = require('cors');
const userRoutes = require('./routes/user');
const route = require('./routes/main');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(userRoutes)
app.use(route)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))