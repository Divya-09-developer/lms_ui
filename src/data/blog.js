import React from "react";

// Exporting the blogs array
export const blogs = [
  {
    id: 1,
    imageSrc: "/assets/img/blog-list/1.png",
    category: "Writing",
    title: "Eco-Education in Our Lives: We Can Change the Future",
    date: "January 5, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 2,
    imageSrc: "/assets/img/blog-list/2.png",
    category: "EDUCATION",
    title: "Engendering a culture of professional development",
    date: "February 18, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 3,
    imageSrc: "/assets/img/blog-list/3.png",
    category: "Business",
    title: "Increasing engagement with Instagram",
    date: "March 27, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 4,
    imageSrc: "/assets/img/blog-list/4.png",
    category: "Business",
    title: "How to design a simple, yet unique and memorable brand identity",
    date: "April 14, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 5,
    imageSrc: "/assets/img/blog-list/5.png",
    category: "Photo & Film",
    title: "5 marketing trends that you should be prepared for in 2022",
    date: "May 22, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 6,
    imageSrc: "/assets/img/blog-list/6.png",
    category: "Lifestyle",
    title: "8 great design trends that are making a come-back in 2021",
    date: "June 8, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 7,
    imageSrc: "/assets/img/blog-list/7.png",
    category: "Illustration",
    title:
      "How to be more creative: 5 cool tips to find inspiration everywhere",
    date: "July 17, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 8,
    imageSrc: "/assets/img/blog-list/8.png",
    category: "Design",
    title:
      "8 interesting programming languages you should be paying attention to",
    date: "August 3, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
  {
    id: 9,
    imageSrc: "/assets/img/blog-list/9.png",
    category: "Animation",
    title: "19 ways to optimize your ad marketing budget efficiently",
    date: "September 12, 2023",
    desc: `Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque`,
  },
];

// Exporting the categories array
export const categories = [
  "All Categories",
  "Animation",
  "Design",
  "Illustration",
  "Lifestyle",
  "Photo & Film",
  "Business",
  "Writing",
];

// Exporting the tags array
export const tags = [
  { id: 1, href: "#", name: "Courses" },
  { id: 2, href: "#", name: "Learn" },
  { id: 3, href: "#", name: "Online" },
  { id: 4, href: "#", name: "Education" },
  { id: 5, href: "#", name: "LMS" },
  { id: 6, href: "#", name: "Training" },
];

// Example usage of blogs, categories, and tags in a React component
function BlogList() {
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <img src={blog.imageSrc} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
          <p>{blog.desc}</p>
          <span>{blog.category}</span>
        </div>
      ))}

      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>Tags</h2>
      <div>
        {tags.map((tag) => (
          <a key={tag.id} href={tag.href} className="tag-item">
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
