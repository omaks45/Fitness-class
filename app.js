import mongoose from "mongoose"
import express from "express"
import { connectToDatabase } from "./config/db.js"

const app = express()

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config";

// DB Connection
connectToDatabase()

// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());

// Import the routes
import userRoutes from "./routes/user.js"

// Using routes
app.use('/api', userRoutes) 
app.get('/health', (req, res) => {
  console.log('checking health')
  res.send('good ')
})
app.get('/', (req, res) => {
  console.log('checking home page')
  res.send('OK')
})

const port = process.env.PORT

// Starting a server
app.listen(port, () => {
  console.log('App is running perfectly well')
})