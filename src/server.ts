import express from 'express'
import { video } from './routes'
const app = express()

app.use('/api',video)
app.use( express.json() )
app.listen( 1007, () =>
{
    console.log( 'Server started at http://localhost:1007' )
})
