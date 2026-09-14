import styles from './AppHeader.module.css'
import { switchFilter } from '../../store/productsListSlice'
import { useAppDispatch } from '../../store/store'
import { Link } from 'react-router-dom'

export function AppHeader() {
	const dispatch = useAppDispatch()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to='/products' className={styles.logo}>
					TestApp
				</Link>

				<nav className={styles.nav}>
					<Link to='/products' className={styles.navLink}>
						Товары
					</Link>
				</nav>

				<button
					className={styles.filterButton}
					onClick={() => dispatch(switchFilter())}
				>
					Избранное
				</button>

				<div className={styles.actions}>
					<label className={styles.search}>
						<span className={styles.searchIcon}>⌕</span>

						<input
							type='search'
							placeholder='Поиск товаров...'
						/>
					</label>

					<Link to='/create-product' className={styles.addButton}>
						<span>＋</span>
						Добавить карточку
					</Link>
				</div>
			</div>
		</header>
	)
}
