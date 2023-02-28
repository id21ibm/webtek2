/* Animating the about us section header text using jquery*/

$(document).ready(function() {
  $("#about-us").hover(function() {
    $(this).animate({
      fontSize: "35px",
      letterSpacing: "0.2em"
    }, 200);
  }, function() {
    $(this).animate({
      fontSize: "30px",
      letterSpacing: "0"
    }, 200);
  });
});


/* Contacts page, JQuery: Check for the contacts form so that the name and e-mail section
   isn't empty before submitting */

   $(document).ready(function() {
    $("#submit-button").click(function(event) {
      // Prevent the form from submitting by default
      event.preventDefault();
    
      // Check that both input fields have a value
      const nameValue = $("#name").val();
      const emailValue = $("#email").val();
      if (nameValue === "" || emailValue === "") {
        // If one or both fields are empty, show an error message
        alert("Kolla så att både namn och e-post är angett.");
      } else {
        // If both fields have a value, submit the form
        $("form").submit();
      }
    });
  });



/* DOM: focus and blur when entering typing in the contact form */
function focusFunctionName() {
  document.getElementById("name").style.background = "#e6e6e6";
}

function blurFunctionName() {
  document.getElementById("name").style.background = "#fff1db";
}

function focusFunctionEmail() {
  document.getElementById("email").style.background = "#e6e6e6";
}

function blurFunctionEmail() {
  document.getElementById("email").style.background = "#fff1db";
}

function focusFunctionSubject() {
  document.getElementById("subject").style.background = "#e6e6e6";
}

function blurFunctionSubject() {
  document.getElementById("subject").style.background = "#fff1db";
}


/* DOM: Google maps image enlarges when mouse hovers over it */

function enlargeImage(x) {
  x.style.height = "auto";
  x.style.width = "550px";
}

function normalSizeImage(x) {
  x.style.height = "autopx";
  x.style.width = "400px";
}




  /* Slideshow functionality */

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides fade');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }





































