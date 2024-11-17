import PokemonGrid from '@/components/pokemon/pokemon-grid'
import React from 'react'

export const metadata = {
    title: 'Pokemon List'
}

const PokemonPage = () => {
    
  return (
    <section>
        <div className="container">
            {/* header */}
            <div className="flex flex-col">
                <h1 className='font-bold'>RTK Query</h1>
                <p>demonstrates the use of rtk query with pokemon</p>
            </div>
            {/* pokemon cards */}
            <PokemonGrid />
        </div>
    </section>
  )
}

export default PokemonPage