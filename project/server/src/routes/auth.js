const { Router } = require('express')
const User = require('../models/user')
const nodemailer = require('nodemailer')
//const jwt = require('jsonwebtoken')
const router = Router()

const baseURL = require('../config/baseURL')
const email = require('../lib/email')



router.get('/api/checkLogin/:login', async (req, res) => {
  try {
    let user = await User.findOne({ login: req.params.login })
    if (user) {
      res.status(200).send({ result: true })
    } else {
      res.status(200).send({ result: false })
    }
  } catch (e) {
    res.status(501).send({ result: false })
  }
})

router.get('/api/checkEmail/:email', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.params.email })
    if (user) {
      res.status(200).send({ result: true })
    } else {
      res.status(200).send({ result: false })
    }
  } catch (e) {
    res.status(501).send({ result: false })
  }
})


router.post('/api/activate', async (req, res) => {
  try {
    const id = req.body.id
    let user = await User.findById(id)

    if (user) {
      await User.findByIdAndUpdate(
        id,
        { $set: { isTemporary: false } },
        { new: true }
      )
      res.status(200).end()
    } else {
      res.status(404).end()
    }
    res.status(200).end()
  } catch (e) {
    console.log(e)
    res.status(501).end()
  }
})

router.post('/api/registration', async (req, res) => {
  try {
    const { password1, password2, currentURL, ...user } = req.body

    const isUser = await User.findOne({ email: req.body.email })

    if (!isUser) {
      const { password_1, password_2, ...user } = req.body
      const newUser = new User({ ...user, password: password_1 })
      await newUser.save()
      const url = baseURL + currentURL + `/?id=${newUser._id}`
      const letter = {
        from: 'lotostoii@gmail.com',
        to: req.body.email,
        subject: 'Oтправка почты',
        text: `Link for activate your account - ${url}`
      }

      email.sendMail(letter, function (error, info) {
        if (error) {
          console.log(error)
          res.status(409).end()
        } else {
          console.log('Email sent successfully: ' + info.response)
          res.status(200).send({ result: true })
        }
      })
    } else {
      res.status(409).end()
    }
  } catch (e) {
    console.log(e)
    res.status(501).end()
  }
})

module.exports = router
