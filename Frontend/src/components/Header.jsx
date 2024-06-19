import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between py-8 px-4">
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          How It Works
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 justify-right">
          Meet clients you're excited to work with and take{' '}
          <span>your career or business to new heights.</span>
        </p>
      </div>

      <div className="text-right">
        <a
          href="#"
          className="rounded-md bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Find opportunities
        </a>
      </div>
    </div>
  );
}

export default Header;
