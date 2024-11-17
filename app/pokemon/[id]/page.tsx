"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCreatePokemonMutation, useGetPokemonByNameQuery } from '@/lib/features/pokemon/pokemon-api-slice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const PokemonByIdPage = () => {
    const params = useParams();        
    const {data, isError, error, isFetching} = useGetPokemonByNameQuery({name: params.id});
    const [createPokemon, {isLoading: isPokemonLoading, isUninitialized: isPokemonUninitialized, isError: isPokemonError}] = useCreatePokemonMutation();

    if(isFetching){
        return <section>
            <div className="container">
                <h1 className="font-bold text-3xl">Loading....</h1>
            </div>
        </section>
    }
  return (
    <section>        
        
        <div className="container">
            <div className="mt-3 flex gap-4 items-center">
                <Button onClick={()=>{
                    createPokemon({});
                }}>
                    {isPokemonLoading ? 'Loading...': 'Create pokemon'}
                </Button>
                {
                    isPokemonError && <span className='text-red-600'>Error creating new pokemon</span>
                }
            </div>
            {
                isError && (
                    <div className='bg-destructive/10 text-destructive my-4 p-2 rounded shadow font-bold inline-flex gap-4 w-full'>
                        <span>Error!</span>
                        <span className="font-medium">
                            {isError && 'Failed to fetch pokemon'}
                        </span>
                    </div>
                )
            }
            <div className="flex items-center">
                <Image src={data?.sprites?.front_default} height={120} width={120} alt={data?.name} />
                <h1 className='font-bold text-4xl capitalize'>{data?.name}</h1>     
            </div>           
            <div className="mt-5 grid grid-cols-3 gap-4">
                <Card className=''>
                    <CardHeader>
                        <h1 className='text-lg font-bold'>Game Indices</h1>
                    </CardHeader>
                    <CardContent className='p-2 max-h-[300px] overflow-y-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border bg-black text-white'>
                                    <th>Index</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.game_indices.map((indice : any) => (
                                        <tr key={indice.game_index + indice.version.name} className='border'>
                                            <td className='border border-gray-200 p-2'>{indice.game_index}</td>
                                            <td className='border border-gray-200 p-2'>{indice.version.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                {/* stats */}
                <Card className=''>
                    <CardHeader>
                        <h1 className='text-lg font-bold'>Stats</h1>
                    </CardHeader>
                    <CardContent className='p-2 max-h-[300px] overflow-y-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border bg-black text-white'>
                                    <th>Name</th>
                                    <th>Base Stat</th>
                                    <th>Effort</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.stats.map((stat : any, index : number) => (
                                        <tr key={index} className='border'>
                                            <td className='border border-gray-200 p-2'>{stat.stat.name}</td>
                                            <td className='border border-gray-200 p-2'>{stat.base_stat}</td>
                                            <td className='border border-gray-200 p-2'>{stat.effort}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
                {/* types */}
                <Card className=''>
                    <CardHeader>
                        <h1 className='text-lg font-bold'>Types</h1>
                    </CardHeader>
                    <CardContent className='p-2 max-h-[300px] overflow-y-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border bg-black text-white'>
                                    <th>Name</th>
                                    <th>Slot</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.types.map((type: {type: any, slot: number}, index: number) => (
                                        <tr key={index} className='border'>
                                            <td className='border border-gray-200 p-2'>{type.type.name}</td>
                                            <td className='border border-gray-200 p-2'>{type.slot}</td>                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
                <h1>Show Down</h1>
                <div className="w-full grid grid-cols-4 gap-4 place-content-baseline">
                    <Image alt='showdown' height={200} width={200} src={data?.sprites?.other?.showdown?.front_default} />
                    <Image alt='showdown' height={250} width={250} src={data?.sprites?.other?.showdown?.back_default} />
                    <Image alt='showdown' height={200} width={200} src={data?.sprites?.other?.showdown?.front_shiny} />
                    <Image alt='showdown' height={250} width={250} src={data?.sprites?.other?.showdown?.back_shiny} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PokemonByIdPage