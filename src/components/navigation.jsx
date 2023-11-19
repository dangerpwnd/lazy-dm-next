import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="font-serif flex justify-evenly">
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
    </nav>
  );
};

export default Navigation;
