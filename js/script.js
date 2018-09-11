// $(document).ready(function() {
//    $("#blank form").submit(function(event) {
//
//      var inputName = $("input#name").val();
//      $('#nameInput').text(inputName);
//      // console.log(inputName);
//      $("#letter").show();
//      event.preventDefault();
//    });
// });

$(document).ready(function() {
  $("#some-form form").submit(function(event) {
    var message = $("#message-input").val().toUpperCase().concat("!!!!");
    $(".message-input").text(message);
    console.log(message);
    event.preventDefault();
  });
});
