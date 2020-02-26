import express from 'express'
import path from 'path'
import user from './routes/user'

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use('/user', user)
app.use((req, res) => {
  res.sendStatus(404);
})
app.listen(port, () => {
  console.log(`listening: ${port}`)
})
