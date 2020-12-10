import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'

const Home = (props) => {

    const {handleSignout,} = useContext(firebaseAuth)
    return (
        <div>
            <button onClick={handleSignout}>sign out </button>
        </div>
    );
};

export default Home;