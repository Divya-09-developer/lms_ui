import React from "react";

// Exporting the options array
export const options = [
  { id: 1, label: "Banking" },
  { id: 2, label: "Digital & Creative" },
  { id: 3, label: "Retail" },
  { id: 4, label: "Designer" },
  { id: 5, label: "Developer" },
];

// Example usage of options in a React component
function OptionsList() {
  return (
    <div className="options-container">
      {options.map((option) => (
        <div key={option.id} className="option-item">
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
}

export default OptionsList;
