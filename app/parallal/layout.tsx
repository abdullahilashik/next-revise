import React from 'react'

const ParallalInterceptLayout = ({children, analytics, dashboard, user} : 
    {
        children: React.ReactNode,
        analytics : React.ReactNode, 
        dashboard: React.ReactNode,
        user: React.ReactNode
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
                    {user}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ParallalInterceptLayout