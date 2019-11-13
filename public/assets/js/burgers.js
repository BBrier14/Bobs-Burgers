$(document).ready(function() {
  // On click of submit button
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    // This burger, based on ID, will be sent into the database and the page will reload
    var burger_id = $(this)
      .children(".burger_id")
      .val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });
});
