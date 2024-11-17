"use client"

import AccountInformationForm from '@/components/form-wizard/account-information'
import PersonalInformaitonForm from '@/components/form-wizard/personal-information'
import { selectActiveTab, selectSteps, updateSelectedTab } from '@/lib/features/mutlipage/multiPageSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

// export const metadata = {
//     title: 'Multi-form wizard'
// }

const MultiStepFormPage = () => {
    const selectedTab = useSelector(selectActiveTab);
    const steps = useSelector(selectSteps);    
    const dispatch = useDispatch();

    const handleSelectedTab = (id : number) => {
        dispatch(updateSelectedTab({id}))
    }
  return (
    <section>
        <div className="container">
            <div className="flex flex-col items-start gap-2">
                <h1 className='font-bold'>Multi-step form page</h1>
                <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus praesentium aperiam. Magni sed cupiditate aut odio deleniti at nemo tenetur inventore accusantium dolore harum incidunt ea necessitatibus amet sint nostrum itaque, tempore ab voluptatibus iure? Officia fugiat commodi iusto architecto asperiores in, perspiciatis, ex eligendi deleniti ullam officiis suscipit.</p>
            </div>
            {/* form */}
            <div className="flex mt-5">
                {/* sidebar */}
                <div className="w-64 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-md shadow-md overflow-clip">
                    <div className="flex items-start flex-col gap-y-4">
                        {
                            steps.map((step : any)=> (
                                <div key={step.id} className={`flex gap-4 hover:bg-blue-400 p-4 w-full duration-200 cursor-pointer`} onClick={() => handleSelectedTab(step.id)}>
                                    <span className={
                                        `
                                            w-12 text-2xl h-12 aspect-square 
                                            rounded-full ${step.id == selectedTab ? 'bg-black text-white' : 'bg-white text-black'}  flex 
                                            items-center justify-center flex-shrink-0
                                        `
                                    }>{step.id}</span>
                                    <div>
                                        <h4 className={step.id == selectedTab? 'font-bold' : 'font-medium'}>{step.label}</h4>
                                        <span>Step {step.id}</span>
                                        {step.id == selectedTab && <span className='text-[10px] uppercase px-2 py-1 rounded bg-teal-600 ml-2'>active</span>}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* forms */}
                <div className='px-4 w-full'>
                    {selectedTab == 1 && <PersonalInformaitonForm />}
                    {selectedTab == 2 && <AccountInformationForm />}
                </div>
            </div>
        </div>
    </section>
  )
}

export default MultiStepFormPage