import {createSlice} from "@reduxjs/toolkit"
const initialState={
    cartItems:[]
}
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        // increment:(state)=>{
        //     state.value+=1;
        // },
        // decrement:(state)=>{
        //     state.value-=1;
        // }
        appendChild:(state,action)=>{
            state.cartItems.push(action.payload);
        },
        removeChild:(state,action)=>{
            // state.value -= 1;
            state.cartItems = state.cartItems.filter((ele,index)=>{
                return ele.id != action.payload;
            })
            // state.value = state.value
        }
    }
})

export const {appendChild,removeChild} = CounterSlice.actions;
export default CounterSlice.reducer;