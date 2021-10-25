import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeConfig from "../Pages/Login/Firebase/firebase.init";

initializeConfig();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // signin 
    const signinGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    // observe 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [])
    // signout 
    const signOutgoogle = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return {
        user,
        isLoading,
        setUser,
        signinGoogle,
        signOutgoogle,
    }
}
export default UseFirebase;