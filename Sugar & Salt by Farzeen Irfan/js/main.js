(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// order now on whatsapp
// Your WhatsApp number (in international format, without + or spaces)
  const phoneNumber = "923170021911";

  // Add click event to all buttons with class "order-now-btn"
  document.querySelectorAll('.order-now-btn').forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      const message = `Hi, I would like to order the ${productName} from Sugar & Salt.`;
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

      // Open WhatsApp chat in new tab
      window.open(waUrl, '_blank');
    });
  });

//   firebase database
 //  Form Submission
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const review = document.getElementById('review').value;

      // Save to Firebase
      const reviewRef = database.ref('reviews').push();
      reviewRef.set({
        name: name,
        phone: phone,
        review: review,
        timestamp: Date.now()
      });

      // Redirect to WhatsApp with pre-filled message
      const msg = `Hi, I'm ${name}. Here's my review for Sugar & Salt:\n\n${review}`;
      const encodedMsg = encodeURIComponent(msg);
      const waLink = `https://wa.me/923170021911?text=${encodedMsg}`;
      window.open(waLink, '_blank');

      // Clear the form
      document.getElementById('reviewForm').reset();
    });


