const PORT = process.env.NODE_PORT || 3000
const isDevelopment = process.env.NODE_ENV
const path = require('path')
const multer = require('multer')

console.log(isDevelopment);

const express = require('express')
const app = express()

const connectToMongoDb = require('./src/lib/connectDb')
const configDb = require('./src/config/DB')

const authRout = require('./src/routes/auth')

const history = require('connect-history-api-fallback')

// need only in production
if (!isDevelopment) {
  app.use(history())
  app.use(express.static(path.join(__dirname, 'static')))
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(multer().array())

app.use('/', authRout)

connectToMongoDb(configDb, () =>
  app.listen(PORT, () =>
    console.log(`Server has been started on - http://localhost:${PORT}`)
  )
)
