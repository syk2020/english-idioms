import express from 'express'
import cors from 'cors'
const { data } = require('../data/idioms')

const app: express.Express = express()

/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
*/

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing
const router: express.Router = express.Router()
router.get('/api/getTest', (req:express.Request, res:express.Response) => {
  res.send("Hello TypeScript!")
})
router.get('/api', (req:express.Request, res:express.Response) => {
  res.send(data)
})

// router.post('/api/postTest', (req:express.Request, res:express.Response) => {
//   res.send(req.body)
// })

app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000,() => {
  console.log('Example app listening on port 3000!') 
})