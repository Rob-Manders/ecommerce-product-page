
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import AddToCartButton from '../elements/AddToCartButton'
import Price from '../elements/Price'
import QtySelector from '../elements/QtySelector'

const ProductDetailsContainer = styled.section`
	padding: 24px;

	.brand {
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12rem;
		color: ${props => props.theme.orange};
		margin: 0;
	}

	.productName {
		margin: 1rem 0 1.5rem;
	}

	@media (min-width: ${props => props.theme.breakpointTablet}) {
		padding: 50px 75px;
		width: 445px;
		padding: 0;
		margin: 2rem auto 3rem;

		.interactiveElements {
			display: flex;
		}
	}

	@media (min-width: ${props => props.theme.breakpointDesktop}) {
		width: 50%;
		padding: 50px;
	}
`

export default function ProductDetails() {
	const { styles } = useContext(StyleContext)

	return (
		<ProductDetailsContainer theme={styles}>
			<p className="brand">Sneaker Company</p>
			<h2 className="productName">Fall Limited Edition Sneakers</h2>
			<p className="productDescription">
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
			</p>
			<Price price={250} discountPercentage={50} />
			<div className="interactiveElements">
				<QtySelector />
				<AddToCartButton />
			</div>
		</ProductDetailsContainer>
	)
}