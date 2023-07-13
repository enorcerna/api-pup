import express from 'express'
import { video } from './routes'
import serveless from 'serverless-http'
const app = express()

app.use( '/api', video )
app.use( '*', ( _req,res )=> {
    res.json( { message: 'Welcome to the Video API' } )
})
app.use( express.json() )
// const PORT = process.env.PORT || 1007
// app.listen( PORT, () =>
// {
//     console.log( 'Server started at http://localhost:1007' )
// })
export default app
export const handler = serveless( app )
