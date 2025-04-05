import React from "react";

// Exporting the counters array
export const counters = [
  {
    id: 1,
    number: "350,000+",
    title: "Students worldwide",
  },
  {
    id: 2,
    number: "496,000+",
    title: "Total course views",
  },
  {
    id: 3,
    number: "19,000+",
    title: "Five-star course reviews",
  },
  {
    id: 4,
    number: "987,000+",
    title: "Students community",
  },
];

// Example usage of counters in a React component
function Counters() {
  return (
    <div className="counters-container">
      {counters.map((counter) => (
        <div key={counter.id} className="counter-item">
          <h2>{counter.number}</h2>
          <p>{counter.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Counters;
