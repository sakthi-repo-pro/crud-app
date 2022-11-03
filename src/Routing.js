import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Crud from "./Crud_table"
import Navbar from "./Navbar";
import CrudSimple from "./crud-simple";
export default function Routing(){
    return(  
    <div> 
   
        <BrowserRouter>
     <Navbar/>
        <Routes>
          
            <Route path="/" element={<App/>}/>
            <Route path="/crud-table" element={<Crud/>}/>
            <Route path="/crud-simple" element={<CrudSimple/>}/>
        </Routes>
</BrowserRouter>
    </div>
   

    );
}