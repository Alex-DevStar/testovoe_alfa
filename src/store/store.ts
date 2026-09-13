import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { ProductsSlice } from './productsSlice'
import { ProductsListSlice } from './productsListSlice'

const rootReducer = combineSlices(ProductsSlice, ProductsListSlice)

const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = () => dispatchHook()

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
