import axios from "axios";

export  function getcrud() {
  return axios.get('http://127.0.0.1:8000/crud/')
  .then(res => {
    return res.data
  })}

export  function addcrud(crud) {
return axios.post('http://127.0.0.1:8000/crud/',
{
    employeeid: null,
    employeeno: crud.employeeno.value,
    gender: crud.gender.value,
    age: crud.age.value,
    education: crud.education.value,
    band: crud.band.value,
    monthlyincome: crud.monthlyincome.value,
    totworkingyrs: crud.totworkingyrs.value,
    department: crud.department.value,
})
.then(res => {
    return res.data
})}

export  function editcrud(id, crud) {
    return axios.put('http://127.0.0.1:8000/crud/'+id+'/',
    {
        employeeid: null,
        employeeno: crud.employeeno.value,
        gender: crud.gender.value,
        age: crud.age.value,
        education: crud.education.value,
        band: crud.band.value,
        monthlyincome: crud.monthlyincome.value,
        totworkingyrs: crud.totworkingyrs.value,
        department: crud.department.value,
    })
    .then(res => {
        return res.data
    })}

export  function deletecrud(id) {
    return axios.delete('http://127.0.0.1:8000/crud/'+id+'/')
    .then(res => {
        return res.data
    })}