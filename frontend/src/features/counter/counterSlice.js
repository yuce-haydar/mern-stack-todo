import { createSlice } from "@reduxjs/toolkit";

// create slice içerisinde state istiyor dışarda bir başlangız statesi tanımlanacak   

const initialState={
    value:0 
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        topla:(state)=>{
            state.value+=1
        },
        cikar:(state)=>{
            state.value-=1
        },
        degeregore:(state,action)=>{
state.value+=action.payload
        }
    }
})

//dışardan erişmek için counterSlice.action diyerek tanımlanabilir 

export const {topla,cikar,degeregore} =counterSlice.actions
export default counterSlice.reducer