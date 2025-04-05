import React from "react";
import { helpItems } from "./data3"; // Import the data from `helpItems.js`

const HelpCenter = () => {
  return (
    <div>
      <h1>Help Center</h1>
      <section>
        {helpItems.map((item) => (
          <div key={item.id} className="help-item">
            <img src={item.icon} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HelpCenter;
