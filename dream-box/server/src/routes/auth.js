const { Router } = require('express')
const User = require('@m/user')
const jwt = require('jsonwebtoken')
const router = Router()
const baseURL = require('@c/baseURL')
const email = require('@lib/email')
const TOKEN_SECRET_KEY = require('@c/secret')
const multer = require('multer')
const path = require('path')
const createHash = require('hash-generator')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './../../files'))
  },
  filename: function (req, file, cb) {
    req.fileName = req.user._id + '_hash_' + createHash(4) + path.extname(file.originalname)
    cb(null, req.fileName)
  }
})
let upload = multer({ storage: storage })


router.post('/api/upload', upload.single('img'), async (req, res) => {
  try {
    const id = req.user._id
    await User.findByIdAndUpdate(
      id,
      { $set: { logo: req.fileName } },
      { new: true }
    )
    let user = await User.findById(id)
    user = JSON.parse(JSON.stringify(user))
    user.logo = req.fileName

    res.status(200).send({ user, token: jwt.sign(user, TOKEN_SECRET_KEY), result: true })
  } catch (e) {
    console.log(e)
    res.status(501).send({ result: false })
  }
})


router.use(multer().array())

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

router.get('/api/check-user', async (req, res) => {
  try {
    const { user } = req
    if (user) {
      res.status(200).send({ result: true, user })
    } else {
      res.status(200).send({ result: false })
    }
  } catch (e) {
    res.status(501).send({ result: false })
  }
})

router.post('/api/log-in', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(200).json({ reasult: false })
    }

    if (!user.validatePassword(req.body.password)) {
      return res.status(200).json({ result: false })
    }

    user = JSON.parse(JSON.stringify(user))
    delete user.password

    res
      .status(200)
      .json({ user, result: true, token: jwt.sign(user, TOKEN_SECRET_KEY) })
  } catch (e) {
    console.log(e)
    res.status(501).end()
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

router.delete('/api/remove-user', async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.user._id })
    if (user) {
      res.status(200).send({ result: true })
    } else {
      res.status(501).send({ result: false })
    }
  } catch (e) {
    console.error(e)
    res.status(501).send({ result: false })
  }
})

module.exports = router
