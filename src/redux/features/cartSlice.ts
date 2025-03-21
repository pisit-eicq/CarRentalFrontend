import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState={
    carItem:ReservationItem[]
}

const initialState:CartState={carItem:[]}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<ReservationItem>)=>{
            state.carItem.push(action.payload);
        },
        removeReservation:(state,action:PayloadAction<ReservationItem>)=>{
            const remainItem=state.carItem.filter(obj=>{
                return ((obj.carModel!==action.payload.carModel)||(obj.pickupDate!==action.payload.pickupDate)||(obj.returnDate!==action.payload.returnDate));
            });
            state.carItem=remainItem;
        }
    }
});

export const {addReservation,removeReservation}=cartSlice.actions;
export default cartSlice.reducer;