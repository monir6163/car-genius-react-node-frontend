import React from 'react';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const { signinGoogle } = useAuth();
    return (
        <div className="mt-5">
            <h2 className="mb-5">Please Login</h2>
            <button onClick={signinGoogle} className="btn btn-primary">SignIn Google</button>
        </div>
    );
};

export default Login;