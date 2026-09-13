import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/store'
import { addProduct } from '../../store/productsSlice'
import type { Product } from '../../utils/api'
import styles from './CreateProductPage.module.css'

export function CreateProductPage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!title.trim() || !description.trim() || !price) {
			return
		}

		const newProduct: Product = {
			id: Date.now(),
			title: title.trim(),
			description: description.trim(),
			price: Number(price),
			rating: 0,
			availabilityStatus: 'In Stock',
			thumbnail:
				'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
		}

		dispatch(addProduct(newProduct))
		navigate('/products')
	}

	return (
		<section className={styles.page}>
			<h1>Создание продукта</h1>

			<form className={styles.form} onSubmit={handleSubmit}>
				<label>
					Название
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</label>

				<label>
					Описание
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</label>

				<label>
					Цена
					<input
						type="number"
						min="1"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						required
					/>
				</label>

				<button type="submit">Создать</button>
			</form>
		</section>
	)
}
