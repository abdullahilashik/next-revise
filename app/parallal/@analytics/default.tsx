import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title: 'Parallal Routing',
  description: 'Demonstration of how we can implement mutliple page inside a single page.'
}

async function sleep(ms : number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const DefaultAnalytics =  async () => {
  await sleep((3000));
  return (
    <>
      <Card>
        <CardHeader>
          <h1>Default Analytics</h1>
        </CardHeader>
        <CardContent>
          <p className='text-sm !font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam dolorem non nostrum numquam quia possimus natus tempora ratione temporibus, inventore recusandae laboriosam veritatis. Quos tenetur obcaecati itaque nihil aliquam, impedit sint numquam? Nesciunt accusamus inventore alias voluptatibus tempora quod provident consequuntur rem fugit, obcaecati deleniti possimus sequi nam? Vero magni aperiam ipsam aliquid, beatae in voluptatem, ut neque earum quia harum doloremque fuga? Aspernatur veniam distinctio officiis facere et consectetur delectus reprehenderit officia vero, quae dolore, tempore animi quia voluptates ad minima incidunt? Similique nam, sed suscipit nobis doloribus labore debitis neque! Est sequi soluta cum commodi nesciunt amet enim aut saepe id. Sint sit error provident amet quaerat quia nesciunt, asperiores consequatur eos blanditiis consectetur. Doloribus in quas quam.</p>
        </CardContent>
      </Card>
    </>
  )
}

export default DefaultAnalytics