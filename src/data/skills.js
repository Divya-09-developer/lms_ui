import React from 'react';

// Skills Data
export const skillsOne = [
  {
    id: 1,
    imageSrc: "/assets/img/home-3/learn/1.png",
    skill: "Node Js",
    delay: 1,
  },
  {
    id: 2,
    imageSrc: "/assets/img/home-3/learn/2.png",
    skill: "HTML5",
    delay: 2,
  },
  {
    id: 3,
    imageSrc: "/assets/img/home-3/learn/3.png",
    skill: "JQuery",
    delay: 3,
  },
  {
    id: 4,
    imageSrc: "/assets/img/home-3/learn/4.png",
    skill: "CSS",
    delay: 4,
  },
  {
    id: 5,
    imageSrc: "/assets/img/home-3/learn/5.png",
    skill: "React Native",
    delay: 5,
  },
  {
    id: 6,
    imageSrc: "/assets/img/home-3/learn/6.png",
    skill: "Vue Js",
    delay: 6,
  },
];

// Skills Component
const SkillsList = () => {
  return (
    <div className="skills-list">
      <h2>Skills</h2>
      <div className="skills">
        {skillsOne.map(skill => (
          <div key={skill.id} className="skill-item" style={{ animationDelay: `${skill.delay}s` }}>
            <img src={skill.imageSrc} alt={skill.skill} />
            <h3>{skill.skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;