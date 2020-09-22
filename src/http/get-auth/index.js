const arc = require('@architect/functions')

async function auth(req) {
  let account = req.session &&
    req.session.account
  console.log('SESSION: ', req.session)
  let clientID = process.env.GITHUB_CLIENT_ID
  let redirectURL = process.env.GITHUB_REDIRECT
  let href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_url=${redirectURL}`
  let payload = {
    account,
    href
  }

  return {
    statusCode: 200,
    body: JSON.stringify(payload)
  }
}

exports.handler = arc.http.async(auth)
