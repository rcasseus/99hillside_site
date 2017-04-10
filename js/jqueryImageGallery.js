// Jquery Image Gallery
// Code taken from http://codepen.io/solidx00/pen/wgGvyo
// This code was first written for the floor plan page

$( document ).ready(function() {




  $("#img2, #img3, #img4, #img5").hide(); // on load hide the last two images

  // Set buttons to disable one at a time.
    $("#btn1").click(function() {
        if ($("#btn2, #btn3, #btn4, #btn5").attr("disabled","disabled"))
        {
            $("#btn2, #btn3, #btn4, #btn5").removeAttr("disabled","disabled");
            $("#btn1").attr("disabled","disabled");
          }
      });


    $("#btn2").click(function() {
        if ($("#btn1, #btn3, #btn4, #btn5").attr("disabled","disabled"))
        {
            $("#btn1, #btn3, #btn4, #btn5").removeAttr("disabled","disabled");
            $("#btn2").attr("disabled","disabled");
          }
      });


    $("#btn3").click(function() {
        if ($("#btn1, #btn2, #btn4, #btn5").attr("disabled","disabled"))
        {
            $("#btn1, #btn2, #btn4, #btn5").removeAttr("disabled","disabled");
            $("#btn3").attr("disabled","disabled");
        }
    });

    $("#btn4").click(function() {
        if ($("#btn1, #btn2, #btn3, #btn5").attr("disabled","disabled"))
        {
            $("#btn1, #btn2, #btn3, #btn5").removeAttr("disabled","disabled");
            $("#btn4").attr("disabled","disabled");
        }
    });

    $("#btn5").click(function() {
        if ($("#btn1, #btn2, #btn3, #btn4").attr("disabled","disabled"))
        {
            $("#btn1, #btn2, #btn3, #btn4").removeAttr("disabled","disabled");
            $("#btn5").attr("disabled","disabled");
        }
    });


  $("#btn1").click(function(){
    // $("#btn1").attr("disabled","disabled")
    $("#img1").fadeIn(400);
    $("#img2, #img3, #img4, #img5").hide();
    console.log ("Button 1 hit.");

  });

  $("#btn2").click(function(){
    // $("#btn2").attr("disabled","disabled")
    $("#img2").fadeIn(400);
    $("#img1, #img3, #img4, #img5").hide();
    console.log ("Button 2 hit.");

  });

  $("#btn3").click(function(){
    // $("#btn3").attr("disabled","disabled")
    $("#img3").fadeIn(400);
    $("#img1, #img2, #img4, #img5").hide();
    console.log ("Button 3 hit.");

  });

  $("#btn4").click(function(){
    // $("#btn3").attr("disabled","disabled")
    $("#img4").fadeIn(400);
    $("#img1, #img2, #img3, #img5").hide();
    console.log ("Button 4 hit.");

  });

  $("#btn5").click(function(){
    // $("#btn3").attr("disabled","disabled")
    $("#img5").fadeIn(400);
    $("#img1, #img2, #img3, #img4").hide();
    console.log ("Button 5 hit.");

  });
});
