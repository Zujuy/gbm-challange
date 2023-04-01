import { GoogleLogin } from 'react-google-login';

const client_Id = "142779115631-1frq23u0od19nkrc5j5g3s8s8on7aco5.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        return('Login Success!, current user: ', res.profileObj);
    };

    const onFailure = (res) => {
        return(
            <div>
                <h1>'Login failed! :( res:', res)</h1>
            </div>
    )}

    return(
        <div>
            <GoogleLogin 
                clientId={client_Id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
};

export default Login

console.log(("success-->", Login()))