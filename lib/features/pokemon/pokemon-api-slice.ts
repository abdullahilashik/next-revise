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
        }),
        createPokemon: builder.mutation({
            query: (data) => ({
                url: '/create',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useGetPokemonsQuery, useGetPokemonByNameQuery, useCreatePokemonMutation} = pokemonApi;

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/`
        }),
        createProducts: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'post',
                body: post
            })
        })
    })
})