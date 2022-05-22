
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import Icon_Delete from '../icons/Icon_Delete'

const CartItemContainer = styled.div`
	display: flex;
	width: 100;

	.itemImage {
		border-radius: 4px;
	}

	.itemDetails {
		flex-grow: 1;
		margin: 0 1rem;

		p {
			margin: 0;
		}
	}

	.deleteItemButton {
		all: unset;
		cursor: pointer;

		.deleteIcon {
			fill: ${props => props.theme.greyishBlue};
		}

		&:hover,
		&:focus {
			.deleteIcon {
				fill: ${props => props.theme.darkGreyishBlue};
			}
		}
	}
`

export default function CartItem() {
	const { styles } = useContext(StyleContext)

	return (
		<CartItemContainer theme={styles}>
			<img className="itemImage" src="./images/product-1-thumbnail.jpg" alt="thumbnail" width="50" height="50" />
			<div className="itemDetails">
				<p className="itemTitle">Fall Limited Edition Sneakers</p>
				<p className="itemCost">$125.00 x 3 <strong>$375.00</strong></p>
			</div>
			<button className="deleteItemButton">
				<Icon_Delete />
			</button>
		</CartItemContainer>
	)
}