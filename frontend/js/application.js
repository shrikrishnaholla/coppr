$(function() {
  $(document.body).on('appear', '.card', function(e, $affected) {
    // add class called “appeared” for each appeared element
    $(this).addClass("appeared");
  });
  $('.card').appear({force_process: true});
});
