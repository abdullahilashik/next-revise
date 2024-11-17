import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import counterReducer from '@/lib/features/couter/counterSlice';
import multipageReducer from '@/lib/features/mutlipage/multiPageSlice';
import { pokemonApi } from './features/pokemon/pokemon-api-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      wizard: multipageReducer,
      [pokemonApi.reducerPath] : pokemonApi.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(pokemonApi.middleware)
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// Typed hooks for useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;