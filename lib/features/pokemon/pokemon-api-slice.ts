import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemon',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: ({offset, limit})=> `/pokemon?offset=${offset}&limit=${limit}`
        }),
        getPokemonByName: builder.query({
            query: ({name}) => `/pokemon/${name}`
        })
    })
})

export const {useGetPokemonsQuery, useGetPokemonByNameQuery} = pokemonApi;