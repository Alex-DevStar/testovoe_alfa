const URL = 'https://dummyjson.com'

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

export type Product = {
	id: number
	title: string
	description: string
	price: number
	rating: number
	availabilityStatus: string
	thumbnail: string
}

type ProductResponse = {
	products: Product[]
	total: number
	skip: number
	limit: number
}
export const getProductsApi = () =>
	fetch(`${URL}/products`).then((res) => checkResponse<ProductResponse>(res))
