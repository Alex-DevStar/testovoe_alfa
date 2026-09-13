import { useState } from 'react'
import type { Product } from '../../utils/api'
import styles from './ProductCard.module.css'
import { useAppDispatch } from '../../store/store'
import { removeProduct } from '../../store/productsSlice'
import { addProductId, removeProductId } from '../../store/productsListSlice'
import { useNavigate } from 'react-router-dom'

type ProductCardProps = {
	product: Product
}

export function ProductCard({ product }: ProductCardProps) {
	const [liked, setLiked] = useState(false)
	const dispatch = useAppDispatch()
  const navigate = useNavigate();
	return (
		<article
			className={styles.card}
			onClick={() => {
        navigate(`/products/${product.id}`)
			}}
		>
			<div className={styles.imageWrapper}>
				<img
					src={product.thumbnail}
					alt={product.title}
					className={styles.image}
				/>
			</div>

			<div className={styles.content}>
				<h2 className={styles.title}>{product.title}</h2>

				<p className={styles.description}>{product.description}</p>

				<span className={styles.price}>{product.price}$</span>
				<button
					className={styles.favorite}

					onClick={(e) => {
						setLiked((prev) => {
							const nextLiked = !prev
							if (nextLiked) {
								dispatch(addProductId(product.id))
							} else {
								dispatch(removeProductId(product.id))
							}

							return nextLiked
						})

						e.stopPropagation()
					}}

					aria-label={liked ? 'Убрать из избранного' : 'Добавить в избранное'}
				>
					<svg
						className={liked ? styles.liked : styles.heart}

						viewBox='0 0 24 24'

						fill='none'

						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z'

							stroke='currentColor'

							strokeWidth='1.8'

							strokeLinecap='round'

							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<button
					type='button'

					className={styles.delete}

					onClick={(e) => {
						dispatch(removeProduct(product.id))
						e.stopPropagation()
					}}
				>
					Удалить
				</button>
			</div>
		</article>
	)
}
