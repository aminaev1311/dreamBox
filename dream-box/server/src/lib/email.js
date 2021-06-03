const nodemailer = require('nodemailer')
const auth = require('../config/email-auth')

module.exports = nodemailer.createTransport(auth)
