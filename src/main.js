import express from 'express'
import { getAllPosts } from './db.js'


const app = express()

app.get('/', async (req, res) => {
  const allPosts = await getAllPosts()
  console.log('ALL POSTS', allPosts)
  res.send('{ "hi": ":)" }')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
