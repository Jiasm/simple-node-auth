module.exports = function (router, config, logger) {
  router.get('/', async function (context, next) {
    console.log('test')

    context.body = 'test'
  })
}
