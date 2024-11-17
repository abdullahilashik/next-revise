"use client"

import { useGetPokemonsQuery } from '@/lib/features/pokemon/pokemon-api-slice'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const PokemonGrid = () => {
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(20);
    const {data: pokemons, isLoading, isFetching} = useGetPokemonsQuery({offset,limit});    
        
  return (
    <>
        {isFetching && <div className="mt-3">Fetching pokemons...</div>}
        {isLoading && <div className="mt-3">Loading...</div>}
        <div className="grid grid-cols-5 gap-4 mt-5">
            {
                pokemons && pokemons.results.map((pokemon : any) => (
                    <div key={pokemon.name} className='relative px-4 py-2 bg-white shadow-md rounded-md'>
                        <h1>{pokemon.name}</h1>                    
                        <Link href={`/pokemon/${pokemon.url.split('/pokemon/').pop()}`} className='text-sm underline'>
                            <span className="absolute inset-0 m-auto"></span>
                            Read more
                        </Link>
                    </div>
                ))
            }
        </div>
        <div className="mt-5 flex items-center gap-4">
            {offset >= 20 && <Button onClick={()=> setOffset(prev=> prev - 20)}>Previous</Button>}
            <span>Showing data from <strong>{offset}</strong> to <strong>{offset+limit}</strong></span>
            <Button onClick={()=> setOffset(prev=> prev + 20)}>Next</Button>
        </div>
    </>
  )
}

export default PokemonGrid