import type { FC } from 'react'
import { getFilterStatus, getLikedIds } from '../../store/productsListSlice'
import { getProducts } from '../../store/productsSlice'
import { useAppSelector } from '../../store/store'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductList.module.css'



export const ProductList: FC = () => {
	const filterStatus = useAppSelector(getFilterStatus)
	const products = useAppSelector(getProducts)
	const likedIds = useAppSelector(getLikedIds)

	const filteredProducts = products.filter((product) =>
		likedIds.includes(product.id)
	)

	return (
		<section className={styles.list}>
			{(filterStatus ? filteredProducts : products).map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</section>
	)
}
