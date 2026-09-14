import { useEffect } from 'react'
import styles from './App.module.css'
import { fetchProducts } from './store/productsSlice'
import { useAppDispatch } from './store/store'
import { ProductsPage } from './components/ProductsPage/ProductsPage'
import { AppHeader } from './components/AppHeader/Appheader'
import { AppFooter } from './components/AppFooter/AppFooter'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductPage } from './components/ProductPage/ProductPage'
import { CreateProductPage } from './components/CreateProductPage/CreateProductPage'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<div className={styles.app}>
			<AppHeader />

			<main className={styles.main}>
				<Routes>
					<Route path='/' element={<Navigate to='/products' replace />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/products/:id' element={<ProductPage />} />
					<Route path='/create-product' element={<CreateProductPage />} />
				</Routes>
			</main>

			<AppFooter />
		</div>
	)
}

export default App
