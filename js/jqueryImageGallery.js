// Jquery Image Gallery
// Code taken from http://codepen.io/solidx00/pen/wgGvyo
// This code was first written for the floor plan page

$( document ).ready(function() {

  $("#img2, #img3").hide(); // on load hide the last two images

  // Set buttons to disable one at a time.
    $("#btn1").click(function() {
        if ($("#btn2, #btn3").attr("disabled","disabled")) {
            $("#btn2, #btn3").removeAttr("disabled","disabled");
            $("#btn1").attr("disabled","disabled");
          }
      });


    $("#btn2").click(function() {
        if ($("#btn1, #btn2").attr("disabled","disabled")) {
            $("#btn1, #btn2").removeAttr("disabled","disabled");
            $("#btn2").attr("disabled","disabled");
          }
      });


    $("#btn3").click(function() {
        if ($("#btn2, #btn3").attr("disabled","disabled")) {
            $("#btn2, #btn3").removeAttr("disabled","disabled");
            $("#btn23").attr("disabled","disabled");
        }
    });



  $("#btn1").click(function(){
    // $("#btn1").attr("disabled","disabled")
    $("#img1").fadeIn(400);
    $("#img2, #img3").hide();
    console.log ("Button 1 hit.");

  });

  $("#btn2").click(function(){
    // $("#btn2").attr("disabled","disabled")
    $("#img2").fadeIn(400);
    $("#img1, #img3").hide();
    console.log ("Button 2 hit.");

  });

  $("#btn3").click(function(){
    // $("#btn3").attr("disabled","disabled")
    $("#img3").fadeIn(400);
    $("#img1, #img2").hide();
    console.log ("Button 3 hit.");

  });

});
