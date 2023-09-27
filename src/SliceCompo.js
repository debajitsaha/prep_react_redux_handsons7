import { createSlice } from "@reduxjs/toolkit";

const StudentSlice=createSlice({

    name:"stu-data",
    initialState:[
        {name:'debajit',age:24,course:'mern',batch:'EA23'},
        {name:'debajit',age:24,course:'mern',batch:'EA23'},
        {name:'debajit',age:24,course:'mern',batch:'EA23'},
        {name:'debajit',age:24,course:'mern',batch:'EA23'},
        {name:'debajit',age:24,course:'mern',batch:'EA23'},

    ],
    reducers:{
        editStudent:()=>{

        },
        addStudent:()=>{

        }

    }
})

export default StudentSlice.reducer
export const{editStudent,addStudent}=StudentSlice.actions