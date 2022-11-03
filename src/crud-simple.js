import React, { useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "./CRUD.css";
function CRUD() {
    const [name, setName] = useState("")
    const [allData, setAllData] = useState([])
    const [show, setShow] = useState(false)
    const [editIndex, setEditIndex] = useState()

    const handleAdd = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name]);
            setName("")
        }
    }

    const handleDelete = (index) => {
        allData.splice(index, 1)
        setAllData([...allData])
    }

    const handleEdit = (i) => {
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate = () => {
        allData.splice(editIndex, 1, name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }

    return (
        <div>
   <a href="/">Home</a>{" "}<a href="/crud-table">Crud-table</a>{" "}<a href="/crud-simple">Crud-simple-table</a>

        <h1>CRUD Insert, Update and Delete </h1>

            < input value = { name } onChange = {(e)=> setName(e.target.value)
} />
{
    !show ? <button onClick={ handleAdd }> Add </button>:
        < button onClick = { handleUpdate } > Update </button>}

    {
        allData.map((val, i) =>
            <div>
                <table className="simple-crud-table" align="center">
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>{ val }</td>
                        <td>< button className = "edit" onClick = {()=> handleEdit(i)} > <FaPencilAlt/> </button>
                < button className = "delete" onClick = {()=> handleDelete(i)
}><FaTimes/></button></td>
                    </tr>
                </table>
           
            
    </div>
                )
            }
</div>
    );
}
export default CRUD; 