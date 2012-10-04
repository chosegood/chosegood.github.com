var ChosegoodGithubModule = ChosegoodGithubModule || {};

ChosegoodGithubModule.populateRepositories = function () {
  $.ajax(
    {
      url: 'https://api.github.com/users/chosegood/repos',
      dataType: "jsonp"
    }
  ).done(function (resp) {
    var $ul = $('<ul/>');

    _.each(resp.data, function(repo) {
      $("<li><a/></li>")
        .find('a')
        .attr('href', repo.html_url)
        .html(repo.full_name)
        .end()
        .appendTo($ul);
      });

      $('#projects')
        .removeClass('text-error')
        .empty()
        .append($ul);

  }).fail(function() {
    var $frag = $('<strong/>').html('Error loading projects')
      .append('<br/>')
      .append("Please try again later when I don't suck");
    $('#projects')
      .addClass('text-error')
      .empty()
      .append($frag);
    });

};