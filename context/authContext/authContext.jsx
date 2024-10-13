import { createContext, useEffect, useState, useContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase'
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setIsLoading]= useState(true)
const signup = (credintials) => {
return createUserWithEmailAndPassword(auth, credintials.email, credintials.password)
};
const logout = ()=>{
return signOut(auth)
}
const login = (values)=>{
  return  signInWithEmailAndPassword(auth, values.email, values.password)
    }
const resetPassword =(values)=>{
        sendPasswordResetEmail(auth, values.email)
      
          }
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (user)=>{
    setCurrentUser(user);
    setIsLoading(false);
});
return  ()=>{
    unsubscribe();
}
},[])
    return <AuthContext.Provider value={{currentUser, signup, logout, login, resetPassword}}>
{!loading && children}
    </AuthContext.Provider>
}

export default AuthProvider;
