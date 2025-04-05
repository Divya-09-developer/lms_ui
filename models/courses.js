import React, { useState, useEffect } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses'); // Replace with your API endpoint
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.shortDescription}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;