import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'
import {FaWindows} from "react-icons/fa";

const Download = (props) => {

    return (
        <div className={"Downloads"}>
            <h2 style={{marginBottom:0}}>TwinTwin Alpha</h2>
            <p style={{marginBottom:20,fontSize:13}}>A top down multiplayer shooter</p>
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