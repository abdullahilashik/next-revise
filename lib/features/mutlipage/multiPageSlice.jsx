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
        {
            id: 5,
            selected: false,
            label: 'Finish'            
        },
    ],
    personalInfo: {
        name: '',
        email: '',
        website: '',
        isFinished: false
    },
    accountInfo: {
        bank: '',
        phone: '',
        isFinished: false
    },
    experienceInfo: {
        "language": '',
        "age" : 0,
        "education": "",
        "isFinished": false
    },
    billingInfo: {
        card: '',
        exp: '',
        cvc: '',
        name: '',
        isFinished: false
    },
    activeTab: 1,
    status: 'idle',
    error: ''
};


const multipageSlice = createSlice({
    name: 'wizard',
    initialState,
    reducers: {
        nextActiveTab: (state) => {             
            if(state.activeTab < 5){                
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
        },
        updatePersonalInfo: (state, action) => {
            const {name, email, website} = action.payload;
            console.log('Update personal info: ', action.payload);
            state.personalInfo.name = name;
            state.personalInfo.email = email;
            state.personalInfo.website = website;
            state.personalInfo.isFinished = true;
        },
        updateAccountInfo: (state, action) => {
            const {bank, phone} = action.payload;
            console.log('Account payload: ', action);
            state.accountInfo.bank = bank;
            state.accountInfo.phone = phone;
            state.accountInfo.isFinished = true;
        },
        updateExperienceInfo : (state, action) => {
            const {langauge, age, education} = action.payload;
            state.experienceInfo.language = langauge;
            state.experienceInfo.age = age;
            state.experienceInfo.education = education;
            state.experienceInfo.isFinished = true;
        },
        updateBillingInfo: (state, action) => {
            const {card, cvc, exp, name} = action.payload;
            state.billingInfo.card = card;
            state.billingInfo.cvc = cvc;
            state.billingInfo.exp = exp;
            state.billingInfo.name = name;
            state.isFinished = true;
        }
    }
})

export const {
    nextActiveTab, 
    previousActiveTab, 
    updateSelectedTab, 
    updatePersonalInfo,
    updateAccountInfo,
    updateExperienceInfo,
    updateBillingInfo
} = multipageSlice.actions;
export const selectActiveTab = (state) => state.wizard.activeTab;
export const selectSteps = (state) => state.wizard.steps;
export const selectPersonalInfo = (state) => state.wizard.personalInfo;
export const selectAccountInfo = (state) => state.wizard.accountInfo;
export const selectExperienceInfo = (state) => state.wizard.experienceInfo;
export const selectBillingInfo = (state) => state.wizard.billingInfo;
export default multipageSlice.reducer;