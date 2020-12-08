define([
  'jquery',
], function ($) {

  var show = function(id) {
    $(function() {

      $.ajax({
        url: 'https://s7.addthis.com/js/250/addthis_widget.js',
        dataType: 'script',
        data: { pubid: id },
        error: function(jqXHR, status, error) {
          console.log('some bad has happened');
          console.log(status);
          console.log(error);
        },
      });
    });
  };

  return {
    show: show,
  };
});
