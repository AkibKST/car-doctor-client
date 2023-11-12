import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // user creation with firebase 
    const createUser = (email, password)=>{
        // jokhn ei function ke call korbo
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sing in with email and password authentication kora
    const signIn = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user ache kina check korar jonno, memory jeno dhore na rakhe
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setIsLoading(false);
        });
        return() => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;