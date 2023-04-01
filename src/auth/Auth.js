import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Chart from '../components/Chart';
import { gapi } from 'gapi-script';

const client_Id = '142779115631-1frq23u0od19nkrc5j5g3s8s8on7aco5.apps.googleusercontent.com';


function Auth() {
    const [isLogIn, setIsLogIn] = useState(false);
    
    function handleLogin(){
        setIsLogIn(true);
    }

    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId: client_Id,
                scope: ''
            })
        };
        gapi.load('client:auth2', start)
    })

    return(
        <div>
            <Login onLogIn={handleLogin}/>
            {isLogIn && 
            <div>
                <Logout/> 
                <Chart/>
            </div>
            }
        </div>
    );
};

export default Auth
