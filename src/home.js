import {loginStat} from 'login-status'

export class Home {
  heading = 'Home';

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.

  activate() {
    if (!loginStat()) {
      this.username = 'Time to login'
      this.picture = 'http://tse1.mm.bing.net/th?id=OIP.Me6a9845f4c2e2f7f2c43c833bbcec9ddo0&w=203&h=142&c=7&rs=1&qlt=90&o=4&pid=1.1'
      // this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
    } else {
      // this.time = new Date(JSON.parse(window.localStorage.getItem('profile')).updated_at)
      this.picture = JSON.parse(window.localStorage.getItem('profile')).picture
      this.username = JSON.parse(window.localStorage.getItem('profile')).nickname
    }
  }
}
