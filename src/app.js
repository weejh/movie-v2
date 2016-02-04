import {loginStat} from 'login-status'
import {Redirect} from 'aurelia-router'

export class App {
  configureRouter(config, router) {
    config.addPipelineStep('authorize', AuthorizeStep);
    config.title = 'The Movie Diary';
    config.map([
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
        title: 'Status'}
        // ,
      // { route: 'logout',
      //   name: 'logout',
      //   moduleId: 'logout',
      //   nav: true,
      //   title: 'Logout' }
    ]);

    this.router = router;
  }
}

class AuthorizeStep {
  run (navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
      if (!loginStat()) return next.cancel(new Redirect('login'))
    }
    return next()
  }
}
