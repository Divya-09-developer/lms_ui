import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Ensure jQuery is installed and imported

const PrintThis = ({ children, options }) => {
  const printRef = useRef(null);

  useEffect(() => {
    const $element = $(printRef.current);

    // Initialize printThis with options
    $element.printThis(options);

    // Cleanup function to remove the printThis instance
    return () => {
      $element.off(); // Remove any event handlers
    };
  }, [options]);

  return (
    <div ref={printRef}>
      {children}
    </div>
  );
};

// Example usage of the PrintThis component
const App = () => {
  const printOptions = {
    debug: false,
    importCSS: true,
    printContainer: true,
    pageTitle: "My Print Page",
    loadCSS: "path/to/my.css", // Add your CSS path here
    afterPrint: () => alert('Print job completed!'),
  };

  return (
    <div>
      <h1>My Document</h1>
      <PrintThis options={printOptions}>
        <div>
          <h2>Content to Print</h2>
          <p>This content will be printed when you trigger the print function.</p>
        </div>
      </PrintThis>
      <button onClick={() => printRef.current.printThis(printOptions)}>Print</button>
    </div>
  );
};

export default App;