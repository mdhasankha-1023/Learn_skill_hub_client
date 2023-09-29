import { createContext, useEffect, useState} from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();

const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // sign up with google
    const GoogleSignIn = () => {
       return signInWithPopup(auth, GoogleProvider)
    }

    // sign in with github
    const GithubSignIn = () => {
        return signInWithPopup(auth, GithubProvider)
    }

    // sign up with email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            return unSubscribe;
        }
    }, [])







    const authInfo = {
        user,
        loading,
        GoogleSignUp: GoogleSignIn,
        GithubSignIn,
        signUp, 
        signIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;