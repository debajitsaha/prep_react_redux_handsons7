import{configurestore}from "@reduxjs/toolkit"
import StudentSlice from "./SliceCompo"
const store=configurestore({
    reducer:{
        stu_data:StudentSlice
    }
})
export default store