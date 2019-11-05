const mockjs = require('mockjs')
module.exports = mockjs.mock({
  success: 'success',
  'data|3-9': [{
    'id|+1': 2,
    'name': mockjs.Random.cname()
  }]
})
