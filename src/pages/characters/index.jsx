import React from 'react';

import Navigation from '../../components/navigation.jsx';
import Character from '../../components/character.jsx';
import NewCharacter from '../../components/newcharacter.jsx';

const Characters = () => {
  return (
    <div>
      <Navigation title="Characters" />
      <section className="grid grid-auto-rows grid-cols-6 gap-4 m-8">
        <div className="col-start-2 col-span-4">
          <h2 className="mb-4">Current Characters:</h2>
          <div className="flex flex-col bg-cave justify-evenly gap-4">
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
            <NewCharacter />
          </div>
        </div>
        <div>
          <h2 className="mb-4">Tools:</h2>
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
