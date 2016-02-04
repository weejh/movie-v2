export function loginStat () {
  if (window.localStorage.getItem('profile')) {
  // if (false) {
    // console.log('loginStat => got user')
    return true
  } else {
    // console.log('loginStat => no user')
    return false
  }
}
