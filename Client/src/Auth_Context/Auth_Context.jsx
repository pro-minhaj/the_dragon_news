import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase_Config';

export const userContext = createContext(null);

const auth = getAuth(app);

const Auth_Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    // Email And Password Sign Up
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Profile
    const createName = (name, url) => {
       return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : url
       })
    }

    // SendEmail Verification
    const emailVerification = () => {
       return sendEmailVerification(auth);
    }

    const googleSingIn = () => {
       return signInWithPopup(auth, googleProvider);
    }

    // Sing In
    const singIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out
    const logOut = () => {
       return signOut(auth);
    }

    // CurrentUser
    useEffect(() => {
        const disConnect = onAuthStateChanged(auth, currentUser => {
            setLoading(true)
            setUser(currentUser);
        })
        return () => disConnect();
    }, [])

    //Auth Info
    const authInfo = {
        createUser,
        createName,
        emailVerification,
        singIn,
        logOut,
        googleSingIn,
        loading,
        user
    };

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default Auth_Context;