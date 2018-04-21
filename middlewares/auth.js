const req = require('bd-require')
const {decrypt} = req('./libs/crypto')

module.exports = async function (context, next) {
  if (/^\/login/.test(context.url)) {
    await next()
  } else {
    let auth = context.header.authorization

    let result = auth && decrypt(auth)
    if (result && String(result.token) === '123') {
      await next()
    } else {
      context.body = {
        code: 403,
        msg: 'Forbidden'
      }
    }
  }
}
