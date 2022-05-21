
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

interface price {
	price: number
	discountPercentage?: number
}

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.salePriceContainer {
		display: flex;

		.salePrice {
			font-size: 2rem;
			font-weight: 700;
			color: ${props => props.theme.veryDarkBlue};
			margin: 0;
			margin-right: 1rem;
		}

		.discountPercentage {
			font-weight: 700;
			color: ${props => props.theme.orange};
			background-color: ${props => props.theme.paleOrange};
			margin: auto 0;
			padding: 0.1rem 0.5rem;
			border-radius: 6px;
			height: fit-content;
		}
	}

	.normalPrice {
		font-weight: 700;
		text-decoration: line-through;
		color: ${props => props.theme.greyishBlue};
		margin: 0;
	}

	@media (min-width: ${props => props.theme.breakpointDesktop}) {
		flex-direction: column;
		align-items: flex-start;
		margin: 1.5rem 0;
	}
`

export default function Price({ price, discountPercentage = 0}: price) {
	const { styles } = useContext(StyleContext)

	return (
		<PriceContainer theme={styles}>
			<div className="salePriceContainer">
				<p className="salePrice">{discountPercentage ? `$${(price * (discountPercentage / 100)).toFixed(2)}` : `$${price.toFixed(2)}`}</p>
				<p className="discountPercentage">{discountPercentage > 0 && `${discountPercentage}%`}</p>
			</div>
			<p className="normalPrice">{discountPercentage > 0 && `$${price.toFixed(2)}`}</p>
		</PriceContainer>
	)
}