import express from 'express'


const app = express()

app.post('/hello', async (req, res) => {
  res.send('HELLO FROM POST')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
