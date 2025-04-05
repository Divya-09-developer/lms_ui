import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Ensure jQuery is installed and imported

const DocNav = () => {
  const docNavRef = useRef(null);
  const docSectionsRef = useRef([]);

  useEffect(() => {
    const $docNav = $(docNavRef.current);
    const $docSections = $(docSectionsRef.current);

    // Initialize scrollspy
    $('body').scrollspy({
      target: '.doc-sidebar',
    });

    // Add progress bar
    $docNav.find('> li > a').before('<span class="docs-progress-bar" />');

    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).innerHeight();
      const activeIndex = $docNav.find('li a.active').parent().index();

      $docSections.each(function (i) {
        const sectionOffset = $(this).offset().top;
        const sectionHeight = $(this).height();
        const sectionEnd = sectionOffset + sectionHeight;
        let progress = 0;

        if (scrollTop >= sectionOffset && scrollTop <= sectionEnd) {
          progress = ((scrollTop - sectionOffset) / sectionHeight) * 100;
          if (progress > 100) progress = 100;
        } else if (scrollTop > sectionEnd) {
          progress = 100;
        }

        if (sectionEnd < scrollTop + windowHeight - 70) {
          progress = 100;
        }

        const $progressBar = $docNav.find(`.docs-progress-bar:eq(${i})`);
        if (activeIndex > i) {
          $progressBar.parent().addClass('viewed');
        }
        $progressBar.css('width', `${progress}%`);
      });
    };

    $(window).on('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const originalAddClassMethod = $.fn.addClass;

    $.fn.addClass = function () {
      const result = originalAddClassMethod.apply(this, arguments);
      $(this).trigger('cssClassChanged');
      return result;
    };

    const handleClassChange = (e) => {
      $('.doc-nav .nav-item').each(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.dropdown_nav li').parent().closest('li').removeClass('active');
        }
      });
      $(e.target).removeClass('active').parent().addClass('active');
      $('.dropdown_nav li.active').parent().closest('li').addClass('active');
    };

    $('.doc-nav .nav-link').on('cssClassChanged', handleClassChange);

    // Cleanup on unmount
    return () => {
      $('.doc-nav .nav-link').off('cssClassChanged', handleClassChange);
    };
  }, []);

  return (
    <nav className="doc-nav" ref={docNavRef}>
      {/* Render your navigation items here */}
      <ul>
        {/* Example items */}
        <li className="nav-item"><a className="nav-link" href="#section1">Section 1</a></li>
        <li className="nav-item"><a className="nav-link" href="#section2">Section 2</a></li>
        <li className="nav-item"><a className="nav-link" href="#section3">Section 3</a></li>
      </ul>
      <div className="doc-progress-bar-container">
        {/* Progress bars will be added here dynamically */}
      </div>
    </nav>
  );
};

const DocSection = React.forwardRef((props, ref) => {
  return (
    <div className="doc-section" ref={ref} id={props.id}>
      {props.children}
    </div>
  );
});

const Document = () => {
  const sectionRefs = useRef([]);

  return (
    <div className="doc-container">
      <DocNav />
      <div className="doc-content">
        <DocSection ref={(el) => (sectionRefs.current[0] = el)} id="section1">Content for Section 1</DocSection>
        <DocSection ref={(el) => (sectionRefs.current[1] = el)} id="section2">Content for Section 2</DocSection>
        <DocSection ref={(el) => (sectionRefs.current[2] = el)} id="section3">Content for Section 3</DocSection>
      </div>
    </div>
  );
};

export default Document;