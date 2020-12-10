// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'
import {withRouter} from 'react-router-dom'

const Signup = (props) => {


    const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        //wait to signup
        const errorsLen=errors.length()
        await handleSignup()
        if(errorsLen==errors.length()){
            props.history.push('/')
        }
        //push home
    }
    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* replace the div tags with a form tag */}
            {/* make inputs  */}
            <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
            <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} type="password"/>
            <button>register</button>
            {errors.length > 0 ? errors.map(error => <p style={{margin:0,color: 'red'}}>{error}</p> ) : null}
        </form>
    );
};

export default withRouter(Signup);