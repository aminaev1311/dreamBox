const domen = 'drim-box.ru'

module.exports =
  process.env.NODE_ENV.trim() === 'development'
    ? 'http://localhost:8080'
    : `https://${domen}/`
