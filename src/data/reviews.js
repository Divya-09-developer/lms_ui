import React from 'react';

// Reviews Data
export const reviews = [
  {
    id: 1,
    avatarSrc: "/assets/img/avatars/1.png",
    name: "Ali Tufan",
    date: "3 Days ago",
    rating: 5,
    title: "The best LMS Design",
    comment:
      "This course is very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
  },
  {
    id: 2,
    avatarSrc: "/assets/img/avatars/1.png",
    name: "Ali Tufan",
    date: "3 Days ago",
    rating: 5,
    title: "The best LMS Design",
    comment:
      "This course is very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
  },
  {
    id: 3,
    avatarSrc: "/assets/img/avatars/1.png",
    name: "Ali Tufan",
    date: "3 Days ago",
    rating: 5,
    title: "The best LMS Design",
    comment:
      "This course is very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
  },
  // Add more comment objects as needed
];

// Reviews Component
const ReviewsList = () => {
  return (
    <div className="reviews-list">
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className="review-item">
          <img src={review.avatarSrc} alt={review.name} className="avatar" />
          <div className="review-details">
            <h3>{review.name}</h3>
            <p className="review-date">{review.date}</p>
            <p className="review-title">{review.title}</p>
            <p className="review-rating">Rating: {review.rating} ⭐</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;