import React from "react";

// Exporting the curriculum array
export const curriculum = [
  {
    id: 1,
    title: "Course Content ",
    items: [
      { id: 1, title: "Introduction" },
      { id: 2, title: "Crash Course" },
      { id: 3, title: "Reference" },
      { id: 3, title: "Mini Project" },
      { id: 3, title: "Git URL" },
      { id: 3, title: "Quiz URL" },
      { id: 3, title: "Interview URL" },
    ],
  },
  // Add more sections as needed
];

// Example usage of curriculum in a React component
function Curriculum() {
  return (
    <div className="curriculum-container">
      {curriculum.map((section) => (
        <div key={section.id} className="curriculum-section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Curriculum;
