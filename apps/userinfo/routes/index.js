const fakeData = {
  1: {
    sex: 1,
    tel: 13411111111
  },
  2: {
    sex: 0,
    tel: 13511111111
  },
  3: {
    sex: 1,
    tel: 13611111111
  },
  4: {
    sex: 0,
    tel: 13711111111
  },
  5: {
    sex: 0,
    tel: 13811111111
  }
}
const fakeIndex = Object.keys(fakeData)

module.exports = function (router, logger) {
  router.get('/:uid', async function (context, next) {
    let {uid} = context.params

    if (!fakeIndex.includes(uid)) {
      context.body = {
        code: 401,
        msg: 'no data'
      }
    } else {
      context.body = fakeData[uid]
    }
  })
}
