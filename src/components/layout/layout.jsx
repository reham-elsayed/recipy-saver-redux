import { useState } from "react";
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'

export default function Layout(){
    return(
        <>
        <div >
        <Nav />
        </div>
      
         
         <div className="">   <Outlet /> </div> 
        
       
        
        </>
    )
}