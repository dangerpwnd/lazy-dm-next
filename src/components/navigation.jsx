import { useState } from 'react';

import Link from 'next/link';

const Navigation = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-4">
      <nav
        className={`circular-nav ${isOpen ? 'open' : ''}`}
        onClick={toggleOpen}
      >
        <img
          src="/assets/images/logo-dragon.png"
          alt="D&D Dragon Icon"
          className="logo"
        />
        <div className="links">
          <Link
            href="/characters"
            className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
          >
            Characters
          </Link>
          <Link
            href="/strongstart"
            className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
          >
            Strong Start
          </Link>
          <Link
            href="/scenes"
            className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
          >
            Possible Scenes
          </Link>
          <Link
            href="/secrets"
            className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
          >
            Secrets & Clues
          </Link>
          <Link
            href="/locations"
            className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
          >
            Fantastic Locations
          </Link>
        </div>
      </nav>
      <h1 className="col-span-2 text-center py-4">{title}</h1>
    </div>
  );
};

export default Navigation;
