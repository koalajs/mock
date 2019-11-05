const express = require('express')
const app = express()

app.all('*', (req, res, next) => {
  // 0. 对跨域处理
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
  res.header("Access-Control-Allow-Methods","PATCH,PUT,POST,GET,DELETE,OPTIONS")
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
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
