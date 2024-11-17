"use client"
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { useSelector } from 'react-redux'
import { selectAccountInfo, selectBillingInfo, selectExperienceInfo, selectPersonalInfo } from '@/lib/features/mutlipage/multiPageSlice'
import SubmitButton from './submit-button'

const FinishFormPreview = () => {
    const personalInfo = useSelector(selectPersonalInfo);
    const accountInfo = useSelector(selectAccountInfo);
    const experienceInfo = useSelector(selectExperienceInfo);
    const billingInfo = useSelector(selectBillingInfo);

  return (
    <>
        <Card>
            <CardHeader>
                <h1>Review your submission</h1>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {/* personal informaiton */}
                <div className="flex flex-col gap-2">
                    <h4 className='bg-gray-200 px-4 py-1 rounded'>Personal Informaiton</h4>
                    <pre>
                        {JSON.stringify(personalInfo, null, 2)}
                    </pre>
                </div>
                {/* account info */}
                <div className="flex flex-col gap-2">
                    <h4 className='bg-gray-200 px-4 py-1 rounded'>Account Informaiton</h4>
                    <pre>
                        {JSON.stringify(accountInfo, null, 2)}
                    </pre>
                </div>
                {/* experience */}
                <div className="flex flex-col gap-2">
                    <h4 className='bg-gray-200 px-4 py-1 rounded'>Experience Informaiton</h4>
                    <pre>
                        {JSON.stringify(experienceInfo, null, 2)}
                    </pre>
                </div>
                {/* billing */}
                <div className="flex flex-col gap-2">
                    <h4 className='bg-gray-200 px-4 py-1 rounded'>Billing Informaiton</h4>
                    <pre>
                        {JSON.stringify(billingInfo, null, 2)}
                    </pre>
                </div>
                <SubmitButton hasPrevious={true} />
            </CardContent>
        </Card>
    </>
  )
}

export default FinishFormPreview