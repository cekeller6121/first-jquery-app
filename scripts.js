console.log("scipts.js file connected")

$(document).ready(function() {

    $('.btn').on('click', function() {
      console.log("button click")
    });

    $('#btn1').on('click', function() {
      $('#item1').fadeOut(1000)
    });

    $('#btn2').on('click', function() {
      $('#item2').fadeOut(1000).fadeIn(1000)
    });

    $('#btn3').on('click', function() {
      $('#item3').fadeToggle(1000)
    });

    $('#btn4').on('click', function() {
      $('#item4').fadeTo("slow", "background-color:Red")
    });

});
