import {loginStat} from 'login-status'
import {Redirect} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.addPipelineStep('authorize', AuthorizeStep);
    config.title = 'The Movie Diary';
    config.map([
      // { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: 'users',    auth: true,    nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: ['', 'home'],
        name: 'home',
        moduleId: 'home',
        nav: true,
        title: 'Home' },
        { route: 'popular-movies',
          name: 'popular-movies',
          moduleId: 'popular-movies',
          auth: true,
          nav: true,
          title: 'Popular Movies'},
        { route: 'login',
          name: 'login',
          moduleId: 'login',
          nav: true,
          title: 'Login'},
        { route: 'logout',
          name: 'logout',
          moduleId: 'logout',
          nav: true,
          title: 'Logout' }
    ]);

    this.router = router;
  }
}



class AuthorizeStep {
  run(navigationInstruction, next) {
    // Check if the route has an "auth" key
    // The reason for using `getAllInstructions()` is because
    // this includes child routes.
    // console.log('in AuthorizeStep');

    // console.log(navigationInstruction.getAllInstructions());
    // navigationInstruction.getAllInstructions().some(e => {
    //   e.config.auth
    //   console.log('in navigationInstruction =>  ', e.config.auth);
    // })
    console.log(window.location);
    if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
      console.log('in navigationInstruction AuthorizeStep');
      console.log('status => ' + loginStat());

      // window.location = window.location.protocol + '//' + window.location.hostname + 'whoami'
      // console.log(window.location);
// console.log(window.location);
//       console.log('window location => ' + window.location.origin +'/'+'whoami');
      const logInpage = window.location.origin + '/#/' + 'whoami'
      console.log(logInpage);
      if (!loginStat()) return next.cancel(new Redirect('login'))
      // return next.cancel(new Redirect("welcome"))


      // var isLoggedIn = false;
      // if (!isLoggedIn) {
      //   console.log('required login');
      //   return next.cancel(new Redirect('whoami'));
      // }
    }
    return next();
  }
}
