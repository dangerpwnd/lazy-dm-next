import React from 'react';

import Navigation from '../../components/navigation.jsx';

const StrongStart = () => {
  return (
    <div class="h-screen">
      <Navigation title={'Create a Strong Start'} />
      <div class="grid h-2/3 grid-cols-dungeon bg-gray">
        <div class="bg-gray-dark"></div>
        <div class="bg-gray-900"></div>
        <div class="bg-gray-dark"></div>
      </div>
    </div>
  );
};

export default StrongStart;
