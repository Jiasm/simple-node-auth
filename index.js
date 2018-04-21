'use strict'

const Bd = require('bd')
const serve = require('koa-static')
const path = require('path')
const auth = require('./middlewares/auth')
const app = new Bd()

const port = app.configs.port || 8000

app.use(serve(path.join(__dirname, 'public')))
app.use(auth)
app.middlewares()

app.listen(port, function () {
  console.log('listen on', port)
})

process.on('uncaughtException', function (err) {
  console.log(err)
  console.log(err.message)
  console.log(err.stack)
  process.exit()
})
