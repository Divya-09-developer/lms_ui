import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Ensure jQuery is installed and imported

const Parallaxie = ({ image, speed = 0.2, repeat = 'no-repeat', size = 'cover', pos_x = 'center', offset = 0, children }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const $el = $(parallaxRef.current);
    
    // Set initial background properties
    const initialPosY = offset + ($el.offset().top - $(window).scrollTop()) * (1 - speed);
    $el.css({
      'background-image': `url(${image})`,
      'background-size': size,
      'background-repeat': repeat,
      'background-attachment': 'fixed',
      'background-position': `${pos_x} ${initialPosY}px`,
    });

    const handleScroll = () => {
      const posY = offset + ($el.offset().top - $(window).scrollTop()) * (1 - speed);
      $el.css('background-position', `${pos_x} ${posY}px`);
    };

    $(window).on('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, [image, speed, repeat, size, pos_x, offset]);

  return (
    <div ref={parallaxRef} style={{ position: 'relative', height: '100vh' }}>
      {children}
    </div>
  );
};

// Example usage of the Parallaxie component
const App = () => {
  return (
    <div>
      <Parallaxie 
        image="https://example.com/your-image.jpg" 
        speed={0.2} 
        repeat="no-repeat" 
        size="cover" 
        pos_x="center" 
        offset={0}
      >
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>Welcome to Parallaxie</h1>
      </Parallaxie>
      <div style={{ height: '200vh', background: '#f0f0f0' }}>
        <p>Scroll down to see the parallax effect.</p>
      </div>
    </div>
  );
};

export default App;