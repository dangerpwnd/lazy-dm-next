import React from 'react';

import Navigation from '../../components/navigation.jsx';

const Characters = () => {
  return (
    <div>
      <Navigation title="Characters" />
      <section className="grid grid-auto-rows grid-cols-4 gap-4">
        <div className="col-span-3">
          <h2>Current Characters:</h2>
          <div className="flex flex-col bg-stone-wall h-full row-span-4">
            <div className="bg-gray-700 opacity-80 p-4 m-auto w-4/5 flex">
              <ul className="w-2/3">
                <li>Character Name</li>
                <li>Character Class/Lvl</li>
                <li>Character Race/Background</li>
              </ul>
              <ul className="w-1/3">
                <li>Edit</li>
                <li>Favorite</li>
                <li>Delete</li>
              </ul>
            </div>
            <div className="bg-gray-700 opacity-80 p-4 m-auto w-4/5 flex">
              <ul className="w-2/3">
                <li>Character Name</li>
                <li>Character Class/Lvl</li>
                <li>Character Race/Background</li>
              </ul>
              <ul className="w-1/3">
                <li>Edit</li>
                <li>Favorite</li>
                <li>Delete</li>
              </ul>
            </div>
            <div className="bg-gray-700 opacity-80 p-4 m-auto w-4/5 flex">
              <ul className="w-2/3">
                <li>Character Name</li>
                <li>Character Class/Lvl</li>
                <li>Character Race/Background</li>
              </ul>
              <ul className="w-1/3">
                <li>Edit</li>
                <li>Favorite</li>
                <li>Delete</li>
              </ul>
            </div>
            <div className="bg-gray-700 opacity-80 p-4 m-auto w-4/5 flex">
              <ul className="w-2/3">
                <li>Character Name</li>
                <li>Character Class/Lvl</li>
                <li>Character Race/Background</li>
              </ul>
              <ul className="w-1/3">
                <li>Edit</li>
                <li>Favorite</li>
                <li>Delete</li>
              </ul>
            </div>
            <div className="bg-gray-700 opacity-80 p-4 m-auto w-4/5 flex">
              <ul className="w-2/3">
                <li>Character Name</li>
                <li>Character Class/Lvl</li>
                <li>Character Race/Background</li>
              </ul>
              <ul className="w-1/3">
                <li>Edit</li>
                <li>Favorite</li>
                <li>Delete</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2>Tools:</h2>
          <div>
            <ul>
              <li>Random Build</li>
              <li>Sort</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Characters;
