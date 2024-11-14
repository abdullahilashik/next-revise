import React from 'react'

const ParallalInterceptLayout = ({children, analytics, dashboard, auth} : 
    {
        children: React.ReactNode,
        analytics : React.ReactNode, 
        dashboard: React.ReactNode,
        auth: React.ReactNode
    }) => {
  return (
    <section>
        <div className="container">
            <h1>Example of parallal route in nextjs</h1>
            {children}
            <div className="mt-5 w-full py-4">
                <div className="grid grid-cols-2 gap-8">
                    {analytics}
                    {dashboard}
                    {auth}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ParallalInterceptLayout