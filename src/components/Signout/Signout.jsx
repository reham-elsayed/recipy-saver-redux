
import React from 'react';
import {useContext} from 'react';
import { AuthContext } from '../../../context/authContext/authContext';
export default function Signout() {
 
const {currentUser} = useContext(AuthContext)
console.log(currentUser)
  return (
    <article>
      <h2>{currentUser && currentUser.email}</h2>
      
      <p>To Do List</p>
    </article>
  );
}
