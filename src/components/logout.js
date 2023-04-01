import { GoogleLogout } from 'react-google-login';

const client_Id = "142779115631-1frq23u0od19nkrc5j5g3s8s8on7aco5.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        return(
            <div>
                <h1>'Log out successfull!'</h1>
            </div>
            );
    };

    return(
        <div>
            <GoogleLogout 
                clientId={client_Id}
                buttonText={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
};

export default Logout