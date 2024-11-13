import React from 'react'
import { Button } from '@/components/ui/button'

const AuthButton = ({btnText, loading} : {btnText: string, loading: boolean}) => {
  return (
    <Button className="mt-3 w-full" disabled={loading}>
        {
            loading ? 'Please wait..' : btnText
        }
    </Button>
  )
}

export default AuthButton