import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>

            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>

            <form>
                <input type="email" name="email" id="email" placeholder='Your Email' />

                <br />

                <input type="password" name="password" id="password" placeholder='Your Password' />

                <br />

                <input type="submit" value="Login" />

                <br />
            </form>

        </div>
    );
};

export default Login;