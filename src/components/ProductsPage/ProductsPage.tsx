import { ProductList } from '../ProductList/ProductList'
import styles from './ProductsPage.module.css'

export function ProductsPage() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Товары</h1>

				<div className={styles.main}>
					<ProductList />
				</div>
			</div>
		</div>
	)
}
