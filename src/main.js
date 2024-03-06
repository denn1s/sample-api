import express from 'express'


const app = express()

app.get('/hello', async (req, res) => {
  res.send('HELLO FROM MY SERVER')
})

const port = 22666

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
