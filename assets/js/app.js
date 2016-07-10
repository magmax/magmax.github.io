define([
  'github',
//  'addthis',
  'cookiechoices',
  'mathjax',
  'jquery',
  'bootstrap'

], function (github, addthis, cookie, math, $, bootstrap) {

  var initialize = function(){

    cookie.show('Esta web tiene cookies', 'OK', 'Saber más', '/stories/cookies');

    $('table').addClass('table').addClass('table-condensed').addClass('table-striped');

    github.showRepos({
      user: 'magmax',
      count: 3,
      skip_forks: true,
      target: '#gh_repos',
    });

//    addthis.show('ra-550366d5147dadbe');
  };

  return {
    initialize: initialize,
  };
});
