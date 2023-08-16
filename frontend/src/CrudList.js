import React, { useEffect, useState } from 'react'
import { getcrud, addcrud, editcrud , deletecrud} from './ApiService'
import AddCrud from './AddCrud'
import EditCrud from './EditCrud'

export default function CrudList() {

const [cruds, setCruds] = useState([])
const [showAddCrudForm, setShowAddCrudForm] = useState(false)
const [showEditCrudForm, setShowEditCrudForm] = useState(false)
const [selectedEditData, setSelectedEditData] = useState()

useEffect(() => {
    let mount = true
    getcrud()
    .then(res => {console.log("response from api", res)
        setCruds(res)
        return() => mount = false
    })
}, [])

const handleAddSubmit = (e) => {
    addcrud(e.target)
    .then(res => {
        setCruds(res)
    })
}

const handleEditBtn = (crud) => {
    setSelectedEditData(crud)
    console.log("crud selected is", crud)
    setShowEditCrudForm(true)
    setShowAddCrudForm(false)
}

const handleEditSubmit = (e, id) => {
    editcrud(id, e.target)
    .then(res => {
        setCruds(res)
    })
}
function handleCancelBtn() {
    setShowAddCrudForm(false)
}
const handleDeleteBtn = (id) => {
    deletecrud(id)
    .then(res => {
        setCruds(cruds.filter(p=> p.employeeid !== id))
    })
}

  return (
    <>
    <h3>EMPLOYEE LIST</h3>
    <table border={"2px"} cellPadding={"10px"}>
        <thead>
            <tr>
                <td>Employee Number</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Education</td>
                <td>Band</td>
                <td>Monthly Income</td>
                <td>Total Working Years</td>
                <td>Department</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {cruds.map(crud => {
                return <tr key={crud.employeeid}>
                <td>{crud.employeeno}</td>
                <td>{crud.gender}</td>
                <td>{crud.age}</td>
                <td>{crud.education}</td>
                <td>{crud.band}</td>
                <td>{crud.monthlyincome}</td>
                <td>{crud.totworkingyrs}</td>
                <td>{crud.department}</td>
                <td><button onClick={()=>handleEditBtn(crud)}>Edit</button> <button onClick={()=>handleDeleteBtn(crud.employeeid)}>Delete</button></td>
            </tr>
            })}
            
        </tbody>
    </table>
    <button onClick={()=>setShowAddCrudForm(true)}>Add New Employee</button>
    {showAddCrudForm && <AddCrud handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}
    {showEditCrudForm && <EditCrud handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
    </>
  )
}