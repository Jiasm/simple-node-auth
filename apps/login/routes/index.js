const req = require('bd-require')
const {encrypt, decrypt} = req('./libs/crypto')

module.exports = function (router, logger) {
  router.post('/', async function (context, next) {
    logger.access(context)
    let {cryptoParams} = context.request.body

    if (!cryptoParams) {
      context.body = {
        code: 403,
        msg: 'Forbidden'
      }
      return
    }

    let params = decrypt(cryptoParams)

    if (params.account === 'niko' && String(params.password) === '123456') {
      let userInfo = {
        name: 'Niko Bellic',
        age: 18,
        auth: encrypt({
          token: 123
        })
      }

      context.body = {
        code: 200,
        data: encrypt(userInfo)
      }
    } else {
      context.body = {
        code: 403,
        msg: 'Forbidden'
      }
    }
  })
}
