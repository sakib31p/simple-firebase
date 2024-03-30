import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Result } from "postcss";
import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


const handleSingOut = () => {
    signOut(auth)
    .then((result) => {
        console.log(result)
        setUser(null)
      })
      .catch((error) => {
        console.log(error)
      });
}

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                setUser(loginUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const handleGithubSingIn =() =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const logUser = result.user;
            console.log(logUser)
            setUser(logUser)
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    return (
        <div className="text-center">
            <div className="flex text-center justify-center items-center">
                { user ?
                <button onClick={handleSingOut} className="btn">Sing Out</button>
                   :
                   <div>
                    <button className="btn bg-slate-200 text-blue-400" onClick={handleGoogleSingIn}>Google Log In</button> 
                    <button onClick={handleGithubSingIn}>Github Login</button>
                   </div>
                }
            </div>
            {user && <div>
                <h3 className="text-2xl">User : {user?.displayName}</h3>
                <h3>Email : {user?.email}</h3>
                <img src={user.photoURL} alt="" />

            </div>
            }



        </div>

    );
    ;
}

export default LogIn;