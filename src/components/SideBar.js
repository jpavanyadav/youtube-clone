import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'Music', path: '/search?q=music' },
  { name: 'Gaming', path: '/search?q=gaming' },
  { name: 'News', path: '/search?q=news' },
  { name: 'Sports', path: '/search?q=sports' },
  { name: 'Movies', path: '/search?q=movies' },
];

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-100 h-screen p-4 border-r hidden md:block">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              to={cat.path}
              className="block px-2 py-1 rounded hover:bg-gray-200 text-sm"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
