import React, { useState, useEffect } from 'react';

// Joke Component
const JokeComponent = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
      setJoke(data.joke || `${data.setup} - ${data.delivery}`);
    } catch (error) {
      setJoke('Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container mt-8 p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Programming Joke</h2>
      <div className="joke-content text-center">
        {loading ? <p>Loading joke...</p> : <p>{joke}</p>}
      </div>
      <button
        onClick={fetchJoke}
        className="btn mt-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Another Joke
      </button>
    </div>
  );
};

export default JokeComponent;
