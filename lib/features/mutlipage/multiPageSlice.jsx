import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    steps: [
        {
            id: 1,
            selected: true,
            label: 'Personal'
        },
        {
            id: 2,
            selected: false,
            label: 'Account'            
        },
        {
            id: 3,
            selected: false,
            label: 'Expereince'            
        },
        {
            id: 4,
            selected: false,
            label: 'Billing'            
        },
    ],
    step1: {
        "name" : "",
        "isFinished": true
    },
    step2: {
        "bin": null,
        "isFinished": false
    },
    step3: {},
    step4: {},
    step5: {},
    step6: {},
    activeTab: 2,
    status: 'idle',
    error: ''
};


const multipageSlice = createSlice({
    name: 'wizard',
    initialState,
    reducers: {
        nextActiveTab: (state) => {             
            if(state.activeTab < 2){                
                state.activeTab = state.activeTab + 1;
            }
        },
        previousActiveTab: (state) => {            
            if(state.activeTab > 0){
                state.activeTab = state.activeTab - 1;
            }
        },
        updateSelectedTab: (state, action) => {
            const {id} = action.payload;
            state.activeTab = id;
            console.log('Active tab: ', action);
        }        
    }
})

export const {nextActiveTab, previousActiveTab, updateSelectedTab} = multipageSlice.actions;
export const selectActiveTab = (state) => state.wizard.activeTab;
export const selectSteps = (state) => state.wizard.steps;
export default multipageSlice.reducer;