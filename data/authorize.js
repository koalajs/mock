const Mock = require('mockjs')
module.exports = Mock.mock({
  status: 'success',
  data: {
    token: Mock.Random.string(64)
  }
})
