import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit'
import { getProductsApi, type Product } from '../utils/api'

export interface ProductState {
	products: Product[]
	isLoading: boolean
	error: string | null
}

const initialState: ProductState = {
	products: [],
	isLoading: false,
	error: null,
}

export const fetchProducts = createAsyncThunk(
	'products/getProducts',
	async () => getProductsApi()
)

export const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			)
		},
    addProduct: (state, action: PayloadAction<Product>) => {

		state.products.push(action.payload)
	},
	},
	selectors: {
		getIsLoading: (state) => state.isLoading,
		getProducts: (state) => state.products,
		getError: (state) => state.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message!
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.products = action.payload.products
			})
	},
})

export const { getIsLoading, getProducts, getError } = ProductsSlice.selectors
export default ProductsSlice.reducer
export const { removeProduct, addProduct } = ProductsSlice.actions
