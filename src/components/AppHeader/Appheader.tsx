import styles from './AppHeader.module.css'
import { switchFilter } from '../../store/productsListSlice'
import { useAppDispatch } from '../../store/store'

export function AppHeader() {
	const dispatch = useAppDispatch()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href='/' className={styles.logo}>
					TestApp
				</a>

				<nav className={styles.nav}>
					<a href='/' className={styles.navLink}>
						Главная
					</a>

					<a href='/about' className={styles.navLink}>
						О проекте
					</a>
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

						<input type='search' placeholder='Поиск товаров...' />
					</label>

					<button className={styles.addButton}>
						<span>＋</span>
						Добавить карточку
					</button>
				</div>
			</div>
		</header>
	)
}
