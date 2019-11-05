const express = require('express')
const app = express()

app.all('/*', (req, res) => {
  // 1. 识别路径
  const path = req.path
  // 2. 找到data数据
  try {
    const data = require(`./data${path}`)
    // 3. 返回出去 res.json
    res.json(data)
  } catch (e) {
    const data = {
      msg: '不存在这个api mock数据'
    }
    res.json(data)
  }
})

app.listen('8090')
