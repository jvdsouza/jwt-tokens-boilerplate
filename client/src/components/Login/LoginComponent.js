import React, { useState, useEffect } from 'react';
import useInput from '../../CustomHooks/handleChange';

const LoginComponent = ({ props }) => {
    const { value, bind, reset } = useInput('');

    return (
        <>
            <div>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    {...bind}>
                </input>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    {...bind}>
                </input>
            </div>
        </>
    );
}

export default LoginComponent;