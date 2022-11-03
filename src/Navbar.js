import React from "react";
export default function Navbar(){
    (
        <div>
            <ul style={{listStyleType:"none",color:"red"}}>
                <li><a href="/">Home</a></li>
                <li><a href="/crud-table">Crud-Table</a></li>
                <li><a href="/crud-simple">Crud-Simple</a></li>
            </ul>
        </div>
    );
}