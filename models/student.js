import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from your backend API
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students'); // Replace with your API endpoint
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading student data...</p>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h2>{student.first_name} {student.last_name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phonenumber}</p>
            <p><strong>Role:</strong> {student.role}</p>
            <p>
              <strong>Socials:</strong>
              <br />
              LinkedIn: {student.socials.linkedin || 'N/A'}
              <br />
              Facebook: {student.socials.facebook || 'N/A'}
              <br />
              Twitter: {student.socials.twitter || 'N/A'}
            </p>
            <img src={student.profilepictureurl} alt="Profile" width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;