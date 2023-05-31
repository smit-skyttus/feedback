import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsersList = createAsyncThunk("getUsersList",async()=>{
    const{data} = await axios.get("https://localhost:7081/api/Employees");
    return data;
})

export default getUsersList;