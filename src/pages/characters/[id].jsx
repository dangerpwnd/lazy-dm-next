import React from 'react';
import { useRouter } from 'next/router';

const SingleCharacter = () => {

    const router = useRouter();
    const {id} = router.query;

    return (
        <div >
            Single Character Info
            <ul>
                <li class='font-mono'>Character {id}</li>
            </ul>
        </div>
    )
}

export default SingleCharacter