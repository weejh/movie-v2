export class Logout {
  activate () {
    window.localStorage.removeItem('profile')
    window.localStorage.removeItem('id_token')
    window.localStorage.clear()
    window.history.replaceState(null, null, '/')
    window.location.reload()
  }
}
