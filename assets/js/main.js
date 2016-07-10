require.config({
  paths: {
    jquery: [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
      'assets/js/jquery.min'
    ],
    bootstrap: [
      'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min',
      'assets/js/bootstrap.min'
    ],
    mathjax: 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
    google_analytics: 'http://www.google-analytics.com/analytics',
    github: 'libs/github/github',
    addthis: 'libs/addthis/addthis',
    google: 'libs/google/google',
    cookiechoices: 'libs/cookiechoices/main'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});
