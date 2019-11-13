$(document).ready(function() {
  // On click of submit button
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    // This burger, based on ID, will be sent into the database and the page will reload
    var burgerID = $(this)
      .children(".burgerID")
      .val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burgerID
    }).then(function(data) {
      location.reload();
    });
  });
});
