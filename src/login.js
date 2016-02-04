import {Redirect} from 'aurelia-router'
import {loginStat} from 'login-status'
import {logOut} from 'logout'


// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
// @inject(Aurelia)
export class Login {

  lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');
  logOut = true;

  activate() {
    console.log('login activate');
    if (!loginStat()) {
    this.login;
    this.logOut = !this.logOut}
    // } else {
    //   console.log('already login');
    //   this.logOut = !this.LogOut
    // }
    // setInterval(this.upDate = () => {
    //   this.daTe = new Date()
    // }, 500)
  }

  logout () {

        window.localStorage.removeItem('profile')
        window.localStorage.removeItem('id_token')
        window.localStorage.clear()
        window.history.replaceState(null, null, '/')
        window.location.reload()

  }

  login(){
    this.lock.show((err, profile, token) => {
      if(err) {
        console.log(err);
      }
      else {
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
        window.history.go(-1)
        // console.log('login');
        // console.log(window.location);
      }
    });
  }
}
