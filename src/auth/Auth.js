import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Chart from '../components/Chart';
import { gapi } from 'gapi-script';

const client_Id = '619197449057-db5nnko9qdeb8v0b54u7muv6mppasb8j.apps.googleusercontent.com';

function Auth() {
    const [isLogIn, setIsLogIn] = useState(false);
    
    function handleLogin(logged){
        setIsLogIn(logged);
    }

    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId: client_Id,
                scope: ''
            })
        };
        gapi.load('client:auth2', start)
    }, [])

    return(
        <div>
            {isLogIn && 
            <>
            <Logout handleLogin={handleLogin}/>
            <Chart />
            </>}
            {!isLogIn && <Login handleLogin={handleLogin}/>}
        </div>
    );
};

export default Auth
