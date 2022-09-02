
<<<<<<< HEAD
(function ($) { // Begin jQuery
  $(function () { // DOM ready


    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('#nav-list').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery
=======


(function($) { // Begin jQuery
    $(function() { // DOM ready
     

      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
>>>>>>> 66198f5864bed4b549e2cbf0300fee81365de9c8
