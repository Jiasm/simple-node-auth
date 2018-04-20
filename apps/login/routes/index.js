module.exports = function (router, logger) {
  router.get('/', async function (context, next) {
    logger.access(context, 123)
    logger.error(context, new Error('test'), 123)

    context.body = 'hello world'
  })
}
