import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'
import {FaWindows} from "react-icons/fa";

const Download = (props) => {

    return (
        <div className={"Downloads"}>
            <h2>TwinTwin Alpha</h2>
            <FaWindows size={60}/>
            <ul>
                <li>
                    <a href={""}>Installer (.exe)</a>
                </li>
                <li>
                    <a href={""}>Compressed (.zip)</a>
                </li>
            </ul>
        </div>
    );
};

export default Download;