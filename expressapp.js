//AN APPLICATION MUST BE DEPLOYED WITH THE HELP OF EXPRESS ONLY

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Mr.Shashank is Assoicate Software engineer at XenonStack')
  })


app.listen(port, () => {
  console.log(`Example appf listening on port ${port}`)
})

