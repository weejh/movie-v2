export function loginStat () {
  if (window.localStorage.getItem('profile')) {
    return true
  } else {
    return false
  }
}
