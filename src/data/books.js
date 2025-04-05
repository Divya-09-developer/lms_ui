import React from "react";

// Exporting the books array
export const books = [
  {
    id: 1,
    imgSrc: "/assets/img/books/1.png",
    title: "HTML 5 Maker",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
  {
    id: 2,
    imgSrc: "/assets/img/books/2.png",
    title: "CSS Master",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
  {
    id: 3,
    imgSrc: "/assets/img/books/3.png",
    title: "Vue JS",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
  {
    id: 4,
    imgSrc: "/assets/img/books/4.png",
    title: "HTML 5 & CSS3",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
  {
    id: 5,
    imgSrc: "/assets/img/books/5.png",
    title: "CSS Developer",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
  {
    id: 6,
    imgSrc: "/assets/img/books/6.png",
    title: "HTML 5 Maker",
    rating: 5,
    ratingCount: 1845,
    price: 157,
    discountPrice: 79,
  },
];

// Example usage of books in a React component
function BookList() {
  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.imgSrc} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Rating: {book.rating} ({book.ratingCount} reviews)</p>
          <p>
            Price: ${book.discountPrice}{" "}
            <span style={{ textDecoration: "line-through" }}>${book.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
