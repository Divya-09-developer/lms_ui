import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Import your custom CSS if needed

const StickyMenu = () => {
  useEffect(() => {
    const $window = $(window);
    let didScroll;
    let lastScrollTop = 0;
    const delta = 5;
    const $mainNav = $("#sticky");
    const $mainNavHeight = $mainNav.outerHeight();

    $window.on("scroll", function () {
      didScroll = true;
    });

    const interval = setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    function hasScrolled() {
      const scrollTop = $window.scrollTop();
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.removeClass("fadeInDown").addClass("fadeInUp").css('top', -$mainNavHeight);
      } else {
        if (scrollTop + $window.height() < $(document).height()) {
          $mainNav.removeClass("fadeInUp").addClass("fadeInDown").css('top', 0);
        }
      }
      lastScrollTop = scrollTop;
    }

    return () => {
      clearInterval(interval);
      $window.off("scroll");
    };
  }, []);

  return (
    <div id="sticky">
      <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
    </div>
  );
};

const FeedbackSlider = () => {
  useEffect(() => {
    if ($('.doc_feedback_slider').length) {
      $('.doc_feedback_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
      });
    }

    return () => {
      $('.doc_feedback_slider').slick('unslick'); // Cleanup
    };
  }, []);

  return (
    <div className="doc_feedback_slider">
      <div>Feedback 1</div>
      <div>Feedback 2</div>
      <div>Feedback 3</div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize other jQuery functionalities here

    // Example: Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').click(function (event) {
      const target = $(this.hash);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 1000, function () {
          target.focus();
          if (!target.is(":focus")) {
            target.attr('tabindex', '-1');
            target.focus();
          }
        });
      }
    });

    // Back to top button functionality
    const backTopBtn = $('#back-to-top');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        backTopBtn.addClass('show');
      } else {
        backTopBtn.removeClass('show');
      }
    });

    backTopBtn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });

    return () => {
      // Cleanup any jQuery plugins or event listeners if necessary
      $(window).off("scroll");
      backTopBtn.off("click");
    };
  }, []);

  return (
    <div>
      <StickyMenu />
      <div id="section1" style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>Section 1</div>
      <div id="section2" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>Section 2</div>
      <div id="section3" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>Section 3</div>
      <FeedbackSlider />
      <div id="back-to-top" style={{ display: 'none' }}>Back to Top</div>
    </div>
  );
};

export default App;