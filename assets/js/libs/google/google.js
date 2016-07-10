define([
  'google_analytics'
], function (ga) {

  var trackPageView = function(trackId) {
    window.ga('create', trackId);
    window.ga('send', 'pageview');
  };

  return {
    trackPageView: trackPageView,
  };
});
