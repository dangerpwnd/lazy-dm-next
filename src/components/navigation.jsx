import { useState } from 'react';

import NavLink from './navlink';

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
          <NavLink link="/" name="Home" />
          <NavLink link="/characters" name="Characters" />
          <NavLink link="strongstart" name="Strong Start" />
          <NavLink link="/scenes" name="Scenes" />
          <NavLink link="/secrets" name="Secrets & Clues" />
          <NavLink link="/locations" name="Fantastic Locations" />
          <NavLink link="/items" name="Magic Items" />
          <NavLink link="/npcs" name="NPCs" />
        </div>
      </nav>
      <h1 className="col-span-2 text-center py-4">{title}</h1>
      <h2 className="text-center p-4">
        Current Session: Demo Campaign
      </h2>
    </div>
  );
};

export default Navigation;
