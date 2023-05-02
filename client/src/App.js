import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [poems, setPoems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoem = { title, content, category, id: Date.now() };
    setPoems([...poems, newPoem]);
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Poem App</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Poem content"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 h-32 resize-none"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Poem
        </button>
      </form>
      <div className="w-full max-w-md">
        {poems.map((poem) => (
          <div key={poem.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-2">{poem.title}</h2>
            <p className="text-gray-600 mb-4">{poem.category}</p>
            <pre className="whitespace-pre-wrap">{poem.content}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;