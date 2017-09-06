console.log("scipts.js file connected")

$(document).ready(function() {

  $('#btn1').on('click', function() {
    $('#panel1').toggle(1000)
  });

  $('#panel1').on('click', function() {
    $('#panel1').toggle(1000)
  });

});
