import express from 'express'
import { video } from './routes'

const app = express()

app.use( '/api', video )
app.use( '*', ( _req,res )=> {
    res.send( 'this a not ruote' )
})
app.use( express.json() )
const PORT = process.env.PORT || 8080
app.listen( PORT, () =>
{
    console.log( 'Server started at http://localhost:1007' )
})
