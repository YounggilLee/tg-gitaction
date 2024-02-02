const express = require('express')
const app = express()

app.get('/gitaction', (req, res) => {
    res.send('Hey Younggil. It is working!')
})

app.listen(5050, () => {
    console.log('Server is running on port 5050')
})