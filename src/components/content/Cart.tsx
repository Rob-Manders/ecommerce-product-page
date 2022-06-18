
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import CartItem from '../elements/CartItem'
import CheckoutButton from '../elements/CheckoutButton'

const CartContainer = styled.aside`
	position: absolute;
	display: flex;
	flex-direction: column;
	left: 0.5rem;
	right: 0.5rem;
	top: calc(68px + 0.5rem);
	background-color: ${props => props.theme.white};
	width: 360px;
	min-height: 256px;
	border-radius: 10px;
	box-shadow: 0 20px 50px -20px ${props => props.theme.darkShadow};
	z-index: 10;

	.cartHeader {
		font-size: 1rem;
		font-weight: 700;
		margin: 0;
		padding: 1.4rem;
		border-bottom: 1px solid ${props => props.theme.horizontalLine};
	}

	.emptyCart {
		display: grid;
		place-items: center;
		flex-grow: 0.95;

		.emptyCartMessage {
			margin: 0;
			font-weight: 700;
		}
	}

	.fullCart {
		padding: 1.4rem;
	}

	@media (min-width: ${props => props.theme.breakpointTablet}) {
		margin-left: auto;
		margin-top: 50px;
	}
`

export default function Cart() {
	const { styles } = useContext(StyleContext)

	return (
		<CartContainer theme={styles}>
			<h2 className="cartHeader">Cart</h2>
			{/* <div className="emptyCart">
				<p className="emptyCartMessage">Your cart is empty.</p>
			</div> */}
			<div className="fullCart">
				<CartItem />
				<CheckoutButton />
			</div>
		</CartContainer>
	)
}