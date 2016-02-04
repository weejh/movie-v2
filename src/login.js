import {Redirect} from 'aurelia-router';

// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
// @inject(Aurelia)
export class Login {

  lock = new Auth0Lock('NGW5BkUSyZSeAoPy0yC8RJMapLG4aXVT', 'weejh.auth0.com');

  activate() {
    this.login;
    // setInterval(this.upDate = () => {
    //   this.daTe = new Date()
    // }, 500)
  }

  login(){
    this.lock.show((err, profile, token) => {
      if(err) {
        console.log(err);
      }
      else {
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
        // console.log('login');
        // console.log(window.location);
      }
    });
  }
}
