(async function init() {
  const authEl = document.getElementById('auth')
  const accountEl = document.getElementById('account')
  const avatarEl = document.getElementById('avatar')
  try {
    let { account, href } = await ( await fetch('/auth') ).json()
    if (account) {
      authEl.innerHTML = Logout()
      accountEl.innerHTML = UserCard(account)
      avatarEl.innerHTML = Avatar(account.avatar)
    } else {
      authEl.innerHTML = Login(href)
    }
  } catch(err) {
    console.error(err)
  }

  function UserCard(data) {
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

  function Avatar(src) {
    return `
   <img src="${src}" alt="User's avatar">
    `
  }

  function Login(href) {
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

  function Logout() {
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

