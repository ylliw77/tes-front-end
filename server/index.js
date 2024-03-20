const express = require('express');
const PORT = 3000 || process.env.PORT
const app = express()
const cors = require('cors');

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())





app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))