import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ListState {
	likedIds: number[]
	filterEnabled: boolean
}

const initialState: ListState = {
	likedIds: [],
	filterEnabled: false,
}

export const ProductsListSlice = createSlice({
	name: 'productsList',
	initialState,
	reducers: {
		addProductId: (state, action: PayloadAction<number>) => {
			state.likedIds.push(action.payload)
		},
		removeProductId: (state, action: PayloadAction<number>) => {
			state.likedIds = state.likedIds.filter((id) => id !== action.payload)
		},
		switchFilter: (state) => {
			state.filterEnabled = !state.filterEnabled
		},
	},
	selectors: {
		getLikedIds: (state) => state.likedIds,
		getFilterStatus: (state) => state.filterEnabled,
	},
})

export default ProductsListSlice.reducer
export const { getLikedIds, getFilterStatus } = ProductsListSlice.selectors
export const { addProductId, removeProductId, switchFilter } =
	ProductsListSlice.actions
