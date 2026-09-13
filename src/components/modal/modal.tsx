import type { FC } from 'react'
import styles from './modal.module.css'
import type { Product } from '../../utils/api'

type TModalProps = {
	onClose: () => void
	product: Product
}

export const Modal: FC<TModalProps> = ({ onClose, product }) => (
	<div className={styles.overlay}>
		<div className={styles.modal}>
			<div className={styles.header}>
				<h2 className={styles.title}>{product.title}</h2>

				<button
					className={styles.button}
					type='button'
					onClick={onClose}
					aria-label='Закрыть'
				>
					×
				</button>
			</div>

			<div className={styles.content}>
				<img
					className={styles.image}
					src={product.thumbnail}
					alt={product.title}
				/>

				<div className={styles.info}>
					<p className={styles.description}>{product.description}</p>

					<div className={styles.details}>
						<span>Рейтинг: {product.rating}</span>
					</div>

					<span className={styles.price}>${product.price}</span>
				</div>
			</div>
		</div>
	</div>
)
