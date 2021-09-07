/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav sx={{ bg: "primary", variant: "containers.page" }}>
      <Link href="/characters">Characters</Link>
      <Link href="/strongstart">Strong Start</Link>
      <Link href="/scenes">Possible Scenes</Link>
      <Link href="/secrets">Secrets & Clues</Link>
      <Link href="/locations">Fantastic Locations</Link>
      <Link href="/npcs">Important NPCs</Link>
      <Link href="/npcs">Relevant Monsters</Link>
      <Link href="/npcs">Magic Items</Link>
    </nav>
  );
};

export default Navigation;
