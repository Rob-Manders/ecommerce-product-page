
import React from 'react'
import Nav from './components/content/Nav'
import Main from './components/layout/Main'
import ProductDetails from './components/content/ProductDetails'
import ProductImage from './components/content/ProductImage'
import PageContainer from './components/layout/PageContainer'

export default function App() {
	return (
		<PageContainer>
			<Nav />
			<Main>
				<ProductImage />
				<ProductDetails />
			</Main>

		</PageContainer>
	)
}