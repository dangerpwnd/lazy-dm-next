import React from 'react';

import Navigation from '../../components/navigation.jsx';
import Character from '../../components/character.jsx';

const Characters = () => {
  return (
    <div>
      <Navigation title="Characters" />
      <section className="grid grid-auto-rows grid-cols-4 gap-4">
        <div className="col-span-3">
          <h2>Current Characters:</h2>
          <div className="flex flex-col bg-stone-wall h-full row-span-4">
            <Character
              name="Bartos Donadarian"
              cls="Hexblade"
              lvl="10"
              race="Half-elf"
              backgd="Outlander"
              AC="15"
              HP="67"
            />
            <Character
              name="Bartos Donadarian"
              cls="Hexblade"
              lvl="10"
              race="Half-elf"
              backgd="Outlander"
              AC="15"
              HP="67"
            />
            <Character
              name="Bartos Donadarian"
              cls="Hexblade"
              lvl="10"
              race="Half-elf"
              backgd="Outlander"
              AC="15"
              HP="67"
            />
            <Character
              name="Bartos Donadarian"
              cls="Hexblade"
              lvl="10"
              race="Half-elf"
              backgd="Outlander"
              AC="15"
              HP="67"
            />
            <Character
              name="Bartos Donadarian"
              cls="Hexblade"
              lvl="10"
              race="Half-elf"
              backgd="Outlander"
              AC="15"
              HP="67"
            />
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
