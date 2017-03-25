// Javascript for everything in the 99hillside_site project


// Image Gallery for Floorplan.html
// Code taken from our codepen account http://codepen.io/solidx00/pen/RKoYjX

document.getElementById("[name="btn1"]").addEventListener("click", showImg1); // Event listener for the first button
    function showImg1() {
      document.getElementById("img1").style.display = "block";
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "none";
    }

document.getElementById("btn2").addEventListener("click", showImg2); // Event listenter for second button
    function showImg2() {
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "block";
      document.getElementById("img3").style.display = "none";
    }

document.getElementById("btn3").addEventListener("click", showImg3); // Event listenter for third button
    function showImg3() {
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "block";
    }
