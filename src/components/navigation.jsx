import Link from 'next/link';

const Navigation = () => {
  return (
    <nav class="font-serif flex justify-evenly">
      <Link href="/characters">
        <a class="shadow-md text-white bg-gray p-4 hover:bg-purple-700">
          Characters
        </a>
      </Link>
      <Link href="/strongstart">
        <a class="shadow-md text-white bg-gray p-4 hover:bg-purple-700">
          Strong Start
        </a>
      </Link>
      <Link href="/scenes">
        <a class="shadow-md text-white bg-gray p-4 hover:bg-purple-700">
          Possible Scenes
        </a>
      </Link>
      <Link href="/secrets">
        <a class="shadow-md text-white bg-gray p-4 hover:bg-purple-700">
          Secrets & Clues
        </a>
      </Link>
      <Link href="/locations">
        <a class="shadow-md text-white bg-gray p-4 hover:bg-purple-700">
          Fantastic Locations
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
