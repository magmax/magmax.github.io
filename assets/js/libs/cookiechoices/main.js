define([
  'jquery',
], function ($) {

  var show = function(message, dismissText, linkText, linkHref) {

    var cookieName = 'displayCookieConsent';
    var cookieConsentId = 'cookieChoiceInfo';
    var dismissLinkId = 'cookieChoiceDismiss';

    function shouldDisplay() {
      return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
    }

    function saveAnswer() {
      // Set the cookie expiry to one year after today.
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = cookieName + '=y; expires=' + expiryDate.toGMTString();
    }

    function hide() {
      $('#' + cookieConsentId).remove();
    }

    if (shouldDisplay()) {
      var element = '<div id="' + cookieConsentId + '"'
          + 'style=position:fixed;width:100%;height:60px;'
          + 'margin:0;left:0;bottom:0;padding:4px;z-index:1000;'
          + 'text-align:center;vertical-align:center;" '
          + 'class="alert alert-warning" '
          + '>'
          + '<span>' + message + '</span>'
          + '<a href="' + linkHref + '" target="_blank" style="margin-left:8px" class="btn btn-primary">' + linkText + '</a>'
          + '<a href="#" id="' + dismissLinkId + '" style="margin-left:24px" class="btn btn-primary">' + dismissText + '</a>'
          + '</div>';

      hide();
      $('body').append(element);
      $('#' + dismissLinkId).click(function() {
        saveAnswer();
        hide();
      });
    }

  };

  return {
    show: show,
  };
});
