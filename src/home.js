import {loginStat} from 'login-status'

export class Home {
  heading = 'Home';
  logOut = true;
  // rotate = true;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.

  activate() {
    if (!loginStat()) {
      this.username = ''
      // var status = window.sessionStorage.getItem('rotate')
      // console.log('rotate ' ,status);
      // window.sessionStorage.setItem('rotate', 'true')
      // console.log('rotate ' ,status);

      if (window.localStorage.getItem('rotate') === 'true') {
          this.picture = 'http://tse1.mm.bing.net/th?id=OIP.Me6a9845f4c2e2f7f2c43c833bbcec9ddo0&w=203&h=142&c=7&rs=1&qlt=90&o=4&pid=1.1'
          window.localStorage.setItem('rotate', 'false');
      } else {
          this.picture = 'http://tse1.mm.bing.net/th?&id=OIP.Mccf9777d953a5488e46b20840f6069f3o0&w=198&h=198&c=0&pid=1.9&rs=0&p=0'
          window.localStorage.setItem('rotate', 'true');
      }

      // this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
    } else {
      // this.time = new Date(JSON.parse(window.localStorage.getItem('profile')).updated_at)
      this.picture = JSON.parse(window.localStorage.getItem('profile')).picture
      this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
      this.logOut = !this.logOut
    }
  }
}
