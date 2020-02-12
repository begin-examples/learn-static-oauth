(function init() {
  const authEl = document.getElementById('auth')
  const accountEl = document.getElementById('account')
  const avatarEl = document.getElementById('avatar')
  fetch('/auth')
    .then(response => response.json())
    .then(result => {
      let accountData = result.account
      let href = result.href
      if (accountData) {
        authEl.innerHTML = logout()
        accountEl.innerHTML = account(accountData)
        avatarEl.innerHTML = avatar(accountData.avatar)
      } else {
        authEl.innerHTML = login(href)
      }
    })
    .catch(error => {
      console.error(error)
    })

  function account(data) {
    data = data || {}
    let name = data.name
    let username = data.login
    let github = data.url
    return `
  <div
    class="
      display-flex
    "
  >
    <span
      style="
        min-width: 5rem;
      "
    >
      Name
    </span>  <span
      class="
        font-weight100
        overflow-wrap-anywhere
      "
    >
      ${name}
    </span>
  </div>
  <div
    class="
      display-flex
      margin-bottom0
    "
  >
    <span
      style="
        min-width: 5rem;
      "
    >
      User
    </span>  <span
      class="
        font-weight100
        overflow-wrap-anywhere
      "
    >
      ${username}
    </span>
  </div>
    `
  }

  function avatar(src) {
    return `
   <img src="${src}" alt="User's avatar">
    `
  }

  function login(href) {
    return `
  <a
    href=${href}
    class="
      padding-top1
      padding-right3
      padding-bottom1
      padding-left3
      linear-gradient2
      font-size1
      color-light
      text-decoration-none
      border-radius-1
      border-none
      cursor-pointer
      login
    "
    alt="Login"
  ></a>
    `
  }

  function logout() {
    return `
  <form
    method=POST
    action=/logout
  >
    <button
      class="
        padding-top1
        padding-right3
        padding-bottom1
        padding-left3
        font-size2
        linear-gradient2
        color-light
        text-decoration-none
        border-radius-1
        border-none
        cursor-pointer
      "
    >
      Logout
    </button>
  </form>
    `
  }
}())

