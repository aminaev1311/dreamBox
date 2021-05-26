const domen = 'dream-box.space'

module.exports =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : `https://${domen}`
