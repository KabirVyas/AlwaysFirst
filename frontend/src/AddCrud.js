import React from 'react'

export default function AddCrud({handleAddSubmit, handleCancelBtn}) {
  return (
    <>
    <h3>ADD FORM:</h3>
    <form onSubmit={handleAddSubmit}>
        Employee Number <input type='text' name='employeeno' />
        Gender <input type='text' name='gender' />
        Age<input type='number' name='age' />
        Education<input type='text' name='education' />
        Band<input type='number' name='band' />
        Monthly Income<input type='number' name='monthlyincome' />
        Total Working Years<input type='number' name='totworkingyrs' />
        Department<input type='text' name='department' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelBtn}>Cancel</button>

    </form>
    </>
  )
}

