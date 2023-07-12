import express from 'express'
import { video } from './routes'
import serverless from 'serverless-http'
const app = express()

app.use( '/api', video )
app.use( '*', ( _req,res )=> {
    res.send( 'this a not ruote' )
})
app.use( express.json() )
app.listen( 1007, () =>
{
    console.log( 'Server started at http://localhost:1007' )
})

export const handler = serverless( app )
