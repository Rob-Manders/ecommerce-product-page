
import React from 'react'
import styled from 'styled-components'
import Icon_Cart from '../icons/Icon_Cart'

const CartButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	.cartIcon {
		fill: #69707D;
	}

	&:hover,
	&:focus {
		.cartIcon {
			fill: #1D2026;
		}
	}
`

export default function CartButton() {
	return (
		<CartButtonContainer onClick={() => console.log('Open cart...')}>
			<Icon_Cart />
		</CartButtonContainer>
	)
}