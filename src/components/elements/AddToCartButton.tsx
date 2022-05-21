
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext  } from '../../context/Style'
import Icon_Cart from '../icons/Icon_Cart'

const AddToCartButtonContainer = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.orange};
	font-size: 1.05rem;
	font-weight: 700;
	color: ${props => props.theme.white};
	width: 100%;
	min-height: 52px;
	margin-top: 1rem;
	padding: 1rem 0;
	border: none;
	border-radius: 10px;
	box-shadow: 0 20px 50px -20px ${props => props.theme.orange};

	svg {
		fill: ${props => props.theme.white};
		transform: scale(0.8);
		margin-right: 1rem;
	}

	&:hover,
	&:focus {
		opacity: 0.75;
	}

	@media (min-width: ${props => props.theme.breakpointDesktop}) {
		margin: 0;
		margin-left: 0.75rem;
		width: 140%;
	}
`

export default function AddToCartButton() {
	const { styles } = useContext(StyleContext)

	return (
		<AddToCartButtonContainer theme={styles}>
			<Icon_Cart />
			Add to Cart
		</AddToCartButtonContainer>
	)
}

