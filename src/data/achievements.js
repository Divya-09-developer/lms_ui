import React from "react";

// Exporting the schoolAchievement array
export const schoolAchievement = [
  {
    id: 1,
    imageSrc: "/assets/img/home-3/achieve/1.svg",
    title: "350,000+",
    text: "Students worldwide",
  },
  {
    id: 2,
    imageSrc: "/assets/img/home-3/achieve/2.svg",
    title: "496,000+",
    text: "Total course views",
  },
  {
    id: 3,
    imageSrc: "/assets/img/home-3/achieve/3.svg",
    title: "19,000+",
    text: "Five-star course reviews",
  },
  {
    id: 4,
    imageSrc: "/assets/img/home-3/achieve/4.svg",
    title: "987,000+",
    text: "Students community",
  },
];

// Example usage of schoolAchievement in a React component
function Achievements() {
  return (
    <div className="achievement-container">
      {schoolAchievement.map((achievement) => (
        <div key={achievement.id} className="achievement-item">
          <img src={achievement.imageSrc} alt={achievement.title} />
          <h3>{achievement.title}</h3>
          <p>{achievement.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
