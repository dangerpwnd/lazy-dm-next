import Link from 'next/link';

const NavLink = ({ link, name }) => {
  return (
    <Link
      href={link}
      className="shadow-md text-white bg-gray p-4 hover:bg-purple-700"
    >
      {name}
    </Link>
  );
};

export default NavLink;
