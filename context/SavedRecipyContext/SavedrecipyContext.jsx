import { createContext, useContext } from "react";
import { db } from '../../firebase';
import {useState, useEffect} from 'react';
import { AuthContext } from "../authContext/authContext";
import { addDoc , doc,setDoc, collection,deleteDoc,onSnapshot, getDocs} from "firebase/firestore";
export const SavedRecipyContext = createContext();

const SavedRecipyProvider = ({children})=>{
    const {currentUser} = useContext(AuthContext)
const [savedRecipy, setSavedRecipy] = useState({});

const getData = async ()=>{
    if (currentUser){
      try{
        const querySnapshot = await getDocs(collection(db, currentUser.uid))
        const docsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
    
       return(docsArray) ;
        
       
      }catch (err){
        console.log("error to get data: ", err)
        throw err;
      }
       
     
    }
    
}
getData();

  
console.log(currentUser)

  const addData = async (recipy) => {
  
    try {
      //  const userDocRef = doc(db, currentUser.uid);
    
        // Then, get a reference to the recipes collection under the user document
     //   const recipesColRef = collection(userDocRef,"recipy");
        
        // Finally, add the document to the recipes collection
        await setDoc(doc(db, currentUser.uid, recipy.idMeal), recipy);  
      
      console.log('Data added successfully');
    } catch (error) {
      console.log('Error adding data:', error);
    }
  };

  const deleteData = async (recipy) => {
  
    try {
        const recipeRef = doc(db,  currentUser.uid, recipy.idMeal );
    await deleteDoc(recipeRef);     
      console.log('Data added successfully');
    } catch (error) {
      console.log('Error adding data:', error);
    }
  };
useEffect(()=>{

    console.log(savedRecipy)
}, [savedRecipy])
    return <SavedRecipyContext.Provider value={{savedRecipy, setSavedRecipy, addData, deleteData, getData}}>
        {children}
    </SavedRecipyContext.Provider>

}
export default SavedRecipyProvider;