// Jquery Image Gallery
// Code taken from http://codepen.io/solidx00/pen/wgGvyo

$( document ).ready(function() {

  $("#btn1").click(function(){
    $("#img1").fadeIn(400);
    $("#img2, #img3").hide();
    console.log ("Button 1 hit.");

  });

  $("#btn2").click(function(){
    $("#img2").fadeIn(400);
    $("#img1, #img3").hide();
    console.log ("Button 2 hit.");

  });

  $("#btn3").click(function(){
    $("#img3").fadeIn(400);
    $("#img1, #img2").hide();
    console.log ("Button 3 hit.");

  });

});
