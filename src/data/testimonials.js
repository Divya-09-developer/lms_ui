import React from 'react';

// Testimonial data
const testimonials = [
  {
    id: 0,
    imageSrc: "/assets/img/testimonials/1.png",
    name: "Courtney Henry",
    position: "Web Designer",
    comment: "Great Work",
    description: `I think Educrat is the best theme I ever seen this year.
        Amazing design, easy to customize and a design quality
        superlative account on its cloud platform for the
        optimized performance`,
  },
  {
    id: 1,
    imageSrc: "/assets/img/testimonials/2.png",
    name: "Ronald Richards",
    position: "President of Sales",
    comment: "Great Work",
    description: `I think Educrat is the best theme I ever seen this year.
        Amazing design, easy to customize and a design quality
        superlative account on its cloud platform for the
        optimized performance`,
  },
  {
    id: 2,
    imageSrc: "/assets/img/testimonials/3.png",
    name: "Annette Black",
    position: "Nursing Assistant",
    comment: "Great Work",
    description: `I think Educrat is the best theme I ever seen this year.
        Amazing design, easy to customize and a design quality
        superlative account on its cloud platform for the
        optimized performance`,
  },
  {
    id: 3,
    imageSrc: "/assets/img/testimonials/4.png",
    name: "Courtney Henry",
    position: "Web Designer",
    comment: "Great Work",
    description: `I think Educrat is the best theme I ever seen this year.
        Amazing design, easy to customize and a design quality
        superlative account on its cloud platform for the
        optimized performance`,
  },
];

const testimonialsTwo = [
  {
    id: 1,
    author: "Ali Tufan",
    position: "Product Manager, Apple Inc",
    text: "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.",
  },
  {
    id: 2,
    author: "John Smith",
    position: "Marketing Director, XYZ Company",
    text: "Educrat has helped me acquire valuable skills that have greatly enhanced my career prospects. The courses are comprehensive and taught by industry experts.",
  },
  {
    id: 3,
    author: "Emily Johnson",
    position: "Freelance Graphic Designer",
    text: "I've been using Educrat for several months now, and I'm impressed by the quality of the courses. They cover a wide range of topics and are easy to follow.",
  },
  {
    id: 4,
    author: "David Brown",
    position: "Software Engineer, ABC Corporation",
    text: "I highly recommend Educrat for anyone looking to upskill or learn new technologies. The platform is user-friendly, and the instructors are knowledgeable.",
  },
  {
    id: 5,
    author: "Sarah Thompson",
    position: "Digital Marketing Specialist",
    text: "Educrat has been a game-changer for me. The courses are up-to-date and relevant, helping me stay ahead in the ever-changing field of digital marketing.",
  },
];

const paginationImages = [
  "/assets/img/testimonials/image1.png",
  "/assets/img/testimonials/image2.png",
  "/assets/img/testimonials/image3.png",
  // Add more image paths as needed
];

const testimonialsTwoFour = [
  {
    id: 1,
    image: "/assets/img/home-4/testimonials/1.png",
    rating: 4.5,
    numRatings: 1991,
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
    name: "Courtney Henry",
    profession: "Web Designer",
  },
  {
    id: 2,
    image: "/assets/img/home-4/testimonials/2.png",
    rating: 4.5,
    numRatings: 1991,
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
    name: "Courtney Henry",
    profession: "Web Designer",
  },
  {
    id: 3,
    image: "/assets/img/home-4/testimonials/3.png",
    rating: 4.5,
    numRatings: 1991,
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
    name: "Courtney Henry",
    profession: "Web Designer",
  },
];

// Testimonials component
const Testimonials = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      
      <h3>Testimonials Group 1</h3>
      <div className="testimonials-group">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.imageSrc} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.position}</p>
            <p>{testimonial.comment}</p>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>

      <h3>Testimonials Group 2</h3>
      <div className="testimonials-group">
        {testimonialsTwo.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h4>{testimonial.author}</h4>
            <p>{testimonial.position}</p>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

      <h3>Testimonials Group 3</h3>
      <div className="testimonials-group">
        {testimonialsTwoFour.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.profession}</p>
            <p>Rating: {testimonial.rating} ({testimonial.numRatings} ratings)</p>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component and the testimonial data
export { Testimonials, testimonialsTwo, paginationImages };