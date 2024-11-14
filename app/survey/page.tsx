import SurveyForm from '@/components/survey/survey-form'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const SurveyPage = () => {
  return (
    <section>
        <div className="container">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Survey page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere? Fugiat, corrupti.</p>
            </div>
            <div className="mt-5">
                <Card>
                    <CardContent className='p-4'>
                        <SurveyForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default SurveyPage