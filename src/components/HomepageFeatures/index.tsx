import React from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-white">
      <section className="text-center py-20 px-4 bg-gradient-to-b from-indigo-100 to-white">
        <h1 className="text-5xl font-extrabold text-indigo-700">Welcome to ALF!</h1>
        <p className="text-lg mt-4 text-gray-600">A modern, responsive math learning platform</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 py-16">
        {['Practice', 'Lessons', 'Challenges'].map((title, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
            <p className="text-gray-500 mt-2">Explore engaging content to build your math skills.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
