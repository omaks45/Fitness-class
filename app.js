const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

// DB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("DB CONNECTED")
}).catch(() => {
  console.log("UNABLE to connect to DB")
})

// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
const corsOptions = {
  origin: 'https://https://fitness-app-4pmc.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));

// Import the routes
const userRoutes = require("./routes/user")

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