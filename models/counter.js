import React, { useState, useEffect } from 'react';

function App() {
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchCounters = async () => {
      try {
        const response = await fetch('/api/counters'); // Replace with your API endpoint
        const data = await response.json();
        setCounters(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching counters:', error);
        setLoading(false);
      }
    };

    fetchCounters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Counter List</h1>
      <ul>
        {counters.map((counter) => (
          <li key={counter._id}>
            <h2>{counter.title}</h2>
            <p>Number: {counter.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;