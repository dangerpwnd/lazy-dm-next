const Character = ({ name, cls, lvl, race, backgd, AC, HP }) => {
  return (
    <div className="bg-gray-700 p-4 m-auto w-4/5 flex">
      <ul className="w-2/3 grid grid-cols-2">
        <li>
          <h3 className="bg-blue-300">{name}</h3>
        </li>
        <li>Death saves: </li>
        <li>
          {cls} {lvl}
        </li>
        <li>
          {race} {backgd}
        </li>
        <li>AC:{AC}</li>
        <li>HP:{HP}</li>
      </ul>
      <ul className="w-1/3">
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default Character;
