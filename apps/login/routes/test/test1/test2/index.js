module.exports = function (router, config, logger) {
  router.get('/xxx', async function (context, next) {
    context.body = 'test2'
  })
}
