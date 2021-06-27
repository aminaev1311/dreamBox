const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema

const SALT_ROUNDS = 12

const validGender = (value) => {
  const ifFemale = value && value.toSting ? value.toSting().toLowerCase() === 'female' : null
  const ifMale = value && value.toSting ? value.toSting().toLowerCase() === 'male' : null
  return value === null || ifMale || ifFemale
}
const validRole = (value) => {
  const ifFemale = value && value.toSting ? value.toSting().toLowerCase() === 'user' : null
  const ifMale = value && value.toSting ? value.toSting().toLowerCase() === 'admin' : null
  return value === null || ifMale || ifFemale
}



const User = new Schema({
  login: {
    type: String,
    default: 'Гость',
  },
  gender: {
    type: String,
    default: null,
    required: (v) => validGender(v)
  },
  role: {
    type: String,
    default: null,
    required: (v) => validRole(v)
  },
  name: {
    type: String,
    default: ''
  },
  surname: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: 'default-avatar.png'
  },
  email: {
    type: String,
    required: true
  },
  birthday: {
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
