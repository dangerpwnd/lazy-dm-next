import React from 'react';
import { useRouter } from 'next/router';

const SingleLocation = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Single Location Info
      <ul>
        <li class="font-mono">Location {id}</li>
      </ul>
    </div>
  );
};

export default SingleLocation;
