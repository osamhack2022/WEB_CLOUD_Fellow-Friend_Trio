if (process.env.NODE_ENV === 'production') {
  console.log('1')
  module.exports = require('./dev')
} else {
  module.exports = require('./dev')
}
