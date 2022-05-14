
import React from 'react'
import Nav from './components/content/Nav'
import ProductImage from './components/content/ProductImage'
import PageContainer from './components/layout/PageContainer'

export default function App() {
	return (
		<PageContainer>
			<Nav />
			<main>
				<ProductImage />
			</main>

		</PageContainer>
	)
}