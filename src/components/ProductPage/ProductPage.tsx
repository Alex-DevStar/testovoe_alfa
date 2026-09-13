import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { getProducts } from '../../store/productsSlice'
import styles from './ProductPage.module.css'

export function ProductPage() {
	const { id } = useParams()
	const navigate = useNavigate()
	const products = useAppSelector(getProducts)

	const product = products.find((item) => item.id === Number(id))

	if (!product) {
		return <div>Товар не найден</div>
	}

	return (
		<section className={styles.page}>
			<button
				className={styles.backButton}
				type="button"
				onClick={() => navigate('/products')}
			>
				← Назад
			</button>

			<div className={styles.product}>
				<img
					className={styles.image}
					src={product.thumbnail}
					alt={product.title}
				/>

				<div className={styles.info}>
					<h1 className={styles.title}>{product.title}</h1>

					<p className={styles.description}>
						{product.description}
					</p>

					<p>Рейтинг: ⭐ {product.rating}</p>

					<span className={styles.price}>
						{product.price}$
					</span>
				</div>
			</div>
		</section>
	)
}
