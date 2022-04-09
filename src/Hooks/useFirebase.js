import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase/firebase.init";


const auth = getAuth(app);
const googleprodiver = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleprodiver)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
    }

    const signOutGoogle = () => {
        signOut(auth)
            .then(result => {
                setUser({})
            })
    }

    return { user, signInWithGoogle, signOutGoogle };
}

export default useFirebase;