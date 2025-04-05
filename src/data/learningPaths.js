import React from 'react';

// Learning Paths Data
export const learningPath = [
  {
    id: "item1",
    iconBg: "bg-green-2",
    iconSrc: "/assets/img/home-2/learning/icons/1.svg",
    title: "Leadership development",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    id: "item2",
    iconBg: "bg-purple-2",
    iconSrc: "/assets/img/home-2/learning/icons/2.svg",
    title: "Digital transformation",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    id: "item3",
    iconBg: "bg-orange-2",
    iconSrc: "/assets/img/home-2/learning/icons/3.svg",
    title: "Innovation & design thinking",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
];

export const learningPathTwo = [
  {
    id: 1,
    icon: "/assets/img/home-4/learning/1.svg",
    title: "Learn with Experts",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    bgColor: "bg-green-3",
  },
  {
    id: 2,
    icon: "/assets/img/home-4/learning/2.svg",
    title: "Learn Anything",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    bgColor: "bg-yellow-2",
  },
  {
    id: 3,
    icon: "/assets/img/home-4/learning/3.svg",
    title: "Flexible Learning",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    bgColor: "bg-blue-2",
  },
  {
    id: 4,
    icon: "/assets/img/home-4/learning/4.svg",
    title: "Industrial Standart",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    bgColor: "bg-orange-3",
  },
];

export const learningPathFive = [
  {
    id: 1,
    title: "Learn with Experts",
    image: "/assets/img/home-5/learning/1.svg",
    description: "Grursus mal suada faci lisis that ipsum ameti consecte.",
  },
  {
    id: 2,
    title: "Learn Anything",
    image: "/assets/img/home-5/learning/2.svg",
    description: "Grursus mal suada faci lisis that ipsum ameti consecte.",
  },
  {
    id: 3,
    title: "Flexible Learning",
    image: "/assets/img/home-5/learning/3.svg",
    description: "Grursus mal suada faci lisis that ipsum ameti consecte.",
  },
  {
    id: 4,
    title: "Industrial Standart",
    image: "/assets/img/home-5/learning/4.svg",
    description: "Grursus mal suada faci lisis that ipsum ameti consecte.",
  },
];

export const learningPathSix = [
  {
    id: 1,
    iconClass: "icon icon-rating-2 text-dark-1",
    title: "Learn anything",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    id: 2,
    iconClass: "icon icon-online-learning-3 text-dark-1",
    title: "Learn together",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    id: 3,
    iconClass: "icon icon-online-learning-2 text-dark-1",
    title: "Learn with experts",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    id: 4,
    iconClass: "icon icon-access text-dark-1",
    title: "Life Time Access",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
];

export const learningfeatures = [
  {
    id: 1,
    title: "Hand-picked authors",
  },
  {
    id: 2,
    title: "Easy to follow curriculum",
  },
  {
    id: 3,
    title: "Free courses",
  },
  {
    id: 4,
    title: "Money-back guarantee",
  },
];

export const features = [
  {
    id: 1,
    iconSrc: "/assets/img/home-7/about/icons/1.svg",
    title: "Create Account",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    id: 2,
    iconSrc: "/assets/img/home-7/about/icons/2.svg",
    title: "Select Courses",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    id: 3,
    iconSrc: "/assets/img/home-7/about/icons/3.svg",
    title: "Enjoy Your Courses",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
];

export const learningJourney = [
  {
    id: 1,
    imageSrc: "/assets/img/home-5/learning/1.svg",
    title: "Learn with Experts",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    delay: 1,
  },
  {
    id: 2,
    imageSrc: "/assets/img/home-5/learning/2.svg",
    title: "Learn Anything",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    delay: 2,
  },
  {
    id: 3,
    imageSrc: "/assets/img/home-5/learning/3.svg",
    title: "Flexible Learning",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    delay: 3,
  },
  {
    id: 4,
    imageSrc: "/assets/img/home-5/learning/4.svg",
    title: "Industrial Standart",
    text: "Grursus mal suada faci lisis that ipsum ameti consecte.",
    delay: 4,
  },
];

// Learning Paths Component
const LearningPaths = () => {
  return (
    <div className="learning-paths">
      <h2>Learning Paths</h2>
      <div className="learning-path-list">
        {learningPath.map(item => (
          <div key={item.id} className={`learning-path-item ${item.iconBg}`}>
            <img src={item.iconSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2>Learning Path Two</h2>
      <div className="learning-path-two-list">
        {learningPathTwo.map(item => (
          <div key={item.id} className={`learning-path-two-item ${item.bgColor}`}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <h2>Learning Path Five</h2>
      <div className="learning-path-five-list">
        {learningPathFive.map(item => (
          <div key={item.id} className="learning-path-five-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2>Learning Path Six</h2>
      <div className="learning-path-six-list">
        {learningPathSix.map(item => (
          <div key={item.id} className="learning-path-six-item">
            <i className={item.iconClass}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2>Learning Features</h2>
      <div className="learning-features-list">
        {learningfeatures.map(feature => (
          <div key={feature.id} className="learning-feature-item">
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>

      <h2>Features</h2>
      <div className="features-list">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <img src={feature.iconSrc} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <h2>Learning Journey</h2>
      <div className="learning-journey-list">
        {learningJourney.map(item => (
          <div key={item.id} className="learning-journey-item">
            <img src={item.imageSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;