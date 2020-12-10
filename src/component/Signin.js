// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'
import {Link} from "react-router-dom";

const Signin = () => {


    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignin()

    }
    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <form className={"loginForm"} onSubmit={handleSubmit}>
            {/* replace the div tags with a form tag */}
            {/* make inputs  */}
            <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
            <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} type="password"/>
            <button>login</button>
            <a href="#" style={{fontSize:13, marginTop:20}} onClick={()=>alert("not implemented yet ask admin!")}>forgot password?</a>
            {errors.length > 0 ? errors.map(error =>
                 <p style={{margin:0,color: 'red'}}>{error}</p>) : null}

        </form>
    );
};

export default Signin;