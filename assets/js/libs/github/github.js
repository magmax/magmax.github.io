define([
  'jquery'
], function ($) {

  var escapeHtml = function (str){ return $('<div/>').text(str).html(); };

  var render = function(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
    }
    t.innerHTML = fragment;
  }

  var showRepos = function(options){
      $.ajax({
        url: "https://api.github.com/users/"+options.user+"/repos?sort=pushed&callback=?",
        dataType: 'jsonp',
        error: function (err) { $(options.target).addClass('alert alert-warning').text("Error loading data from GitHub"); },
        success: function(data) {
          var repos = [];
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            if (options.skip_forks && data.data[i].fork) { continue; }
            repos.push(data.data[i]);
          }
          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
  };

  return {
    showRepos: showRepos,
  };
});
