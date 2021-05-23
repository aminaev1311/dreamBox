const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema

const SALT_ROUNDS = 12

const User = new Schema({
  login: {
    type: String,
    default: 'Гость'
  },
  name: {
    type: String,
    default: 'Not filled'
  },
  logo: {
    type: String,
    default: 'default-avatar.png'
  },
  email: {
    type: String,
    required: true
  },
  birthDay: {
    type: String,
    default: null
  },
  isTemporary: {
    type: Boolean,
    default: true
  },
  password: {
    type: String,
    required: true
  }
})

User.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcryptjs.genSaltSync(SALT_ROUNDS)
    this.password = bcryptjs.hashSync(this.password, salt)
  }
  next()
})

User.method('validatePassword', function (password) {
  return bcryptjs.compareSync(password, this.password)
})

module.exports = mongoose.model('User', User)
