import React from "react";

// Exporting the students array
export const students = [
  {
    id: 1,
    imgSrc: "/assets/img/home-2/students/1.png",
    name: "Brooklyn Simmons",
    title: "Web Designer",
    socials: [
      { icon: "fa fa-facebook", link: "#" },
      { icon: "fa fa-twitter", link: "#" },
      { icon: "fa fa-instagram", link: "#" },
      { icon: "fa fa-linkedin", link: "#" },
    ],
    tags: ["Design", "Art", "Graphic"],
    buttonLink: "#",
  },
  {
    id: 2,
    imgSrc: "/assets/img/home-2/students/2.png",
    name: "Cody Fisher",
    title: "Dog Trainer",
    socials: [
      { icon: "fa fa-facebook", link: "#" },
      { icon: "fa fa-twitter", link: "#" },
      { icon: "fa fa-instagram", link: "#" },
      { icon: "fa fa-linkedin", link: "#" },
    ],
    tags: ["Design", "Art", "Graphic"],
    buttonLink: "#",
  },
  {
    id: 3,
    imgSrc: "/assets/img/home-2/students/3.png",
    name: "Marvin McKinney",
    title: "President of Sales",
    socials: [
      { icon: "fa fa-facebook", link: "#" },
      { icon: "fa fa-twitter", link: "#" },
      { icon: "fa fa-instagram", link: "#" },
      { icon: "fa fa-linkedin", link: "#" },
    ],
    tags: ["Design", "Art", "Graphic"],
    buttonLink: "#",
  },
  {
    id: 4,
    imgSrc: "/assets/img/home-2/students/4.png",
    name: "Jane Cooper",
    title: "Marketing Coordinator",
    socials: [
      { icon: "fa fa-facebook", link: "#" },
      { icon: "fa fa-twitter", link: "#" },
      { icon: "fa fa-instagram", link: "#" },
      { icon: "fa fa-linkedin", link: "#" },
    ],
    tags: ["Design", "Art", "Graphic"],
    buttonLink: "#",
  },
  {
    id: 5,
    imgSrc: "/assets/img/home-2/students/5.png",
    name: "Ali Tufan",
    title: "Marketing Coordinator",
    socials: [
      { icon: "fa fa-facebook", link: "#" },
      { icon: "fa fa-twitter", link: "#" },
      { icon: "fa fa-instagram", link: "#" },
      { icon: "fa fa-linkedin", link: "#" },
    ],
    tags: ["Design", "Art", "Graphic"],
    buttonLink: "#",
  },
];

// Example React component for rendering students
function StudentsList() {
  return (
    <div className="students-container">
      {students.map((student) => (
        <div key={student.id} className="student-item">
          {/* Student Image */}
          <img src={student.imgSrc} alt={student.name} className="student-image" />

          {/* Student Name and Title */}
          <h3>{student.name}</h3>
          <p>{student.title}</p>

          {/* Social Icons */}
          <div className="student-socials">
            {student.socials.map((social, index) => (
              <a key={index} href={social.link} className="social-icon">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Tags */}
          <div className="student-tags">
            {student.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <a href={student.buttonLink} className="student-button">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}

export default StudentsList;
