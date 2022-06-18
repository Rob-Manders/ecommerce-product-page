
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

const CheckoutButtonContainer = styled.button`
	cursor: pointer;
	display: grid;
	place-items: center;
	background-color: ${props => props.theme.orange};
	font-weight: 700;
	color: ${props => props.theme.white};
	width: 100%;
	min-height: 52px;
	border: none;
	border-radius: 10px;
	margin-top: auto;

	&:hover,
	&:focus {
		opacity: 0.75;
	}
`

export default function CheckoutButton() {
	const { styles } = useContext(StyleContext)

	return (
		<CheckoutButtonContainer theme={styles}>
			Checkout
		</CheckoutButtonContainer>
	)
}