module.exports = function (router, logger) {
  router.get('/', async function (context, next) {
    context.body = {
      code: 200,
      data: [{
        id: 1,
        name: 'Niko Bellic',
        country: 'de'
      }, {
        id: 2,
        name: 'Roman Bellic',
        country: 'de'
      }, {
        id: 3,
        name: 'Michael De Santa',
        country: 'us'
      }, {
        id: 4,
        name: 'Trevor Philips',
        country: 'ca'
      }, {
        id: 5,
        name: 'Franklin Clinton',
        country: 'us'
      }]
    }
  })
}
