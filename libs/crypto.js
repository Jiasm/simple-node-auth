module.exports = {
  decrypt,
  encrypt
}

function decrypt (cryptoStr) {
  return JSON.parse(Buffer.from(cryptoStr, 'base64').toString())
}

function encrypt (str) {
  return Buffer.from(JSON.stringify(str)).toString('base64')
}
