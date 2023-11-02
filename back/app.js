import express from 'express'
import cors from 'cors'
import itemRoutes from './routes/itemRoutes.js'

const app = express()

const port = 8000;

app.use(cors())
app.use(express.json())

app.use('/api', itemRoutes)


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})