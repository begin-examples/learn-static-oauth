let arc = require('@architect/functions')

async function logout(req) {
  console.log('LOGOUT')
  return {
    session: {},
    statusCode: 302,
    location: '/'
  }
}

exports.handler = arc.http.async(logout)
