import React from 'react'

export default function EditCrud({handleEditSubmit, selectedEditData}) {
  return (
    <>
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.employeeid)}>
        Employee Number <input type='text' name='employeeno' defaultValue={selectedEditData.emloyeeno}/>
        Gender <input type='text' name='gender' defaultValue={selectedEditData.gender} />
        Age<input type='number' name='age' defaultValue={selectedEditData.age} />
        Education<input type='text' name='education' defaultValue={selectedEditData.education} />
        Band<input type='number' name='band' defaultValue={selectedEditData.band} />
        Monthly Income<input type='number' name='monthlyincome' defaultValue={selectedEditData.monthlyincome} />
        Total Working Years<input type='number' name='totworkingyrs' defaultValue={selectedEditData.totworkingyrs} />
        Department<input type='text' name='department' defaultValue={selectedEditData.department} />

        <button type='submit'>EDIT</button>
    </form>
    </>
  )
}