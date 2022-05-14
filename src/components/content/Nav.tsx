
import React from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import Icon_Menu from '../icons/Icon_Menu'
import CartButton from '../elements/CartButton'
import Avatar from '../elements/Avatar'
import MenuButton from '../elements/MenuButton'

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 68px;
	padding: 0 1.5rem;

	.leftBlock {
		display: flex;
		align-items: center;

		.desktopLinks {
			display: none;
			margin-left: 3rem;

			a {
				position: relative;
				margin-right: 2rem;

				&:hover::after,
				&:focus::after {
					content: '';
					position: absolute;
					width: 100%;
					left: 0;
					bottom: -46px;
					height: 4px;
					background-color: hsl(26, 100%, 55%);
				}
			}

			@media (min-width: 800px) {
				display: block;
			}
		}
	}

	.rightBlock {
		display: flex;
		align-items: center;
	}

	@media (min-width: 800px) {
		height: 112px;
		border-bottom: 1px solid #E4E9F2;
	}

	@media (min-width: 1110px) {
		padding: 0;
	}
`

export default function Nav() {
	return (
		<NavContainer>
			<div className="leftBlock">
				<MenuButton />
				<Logo />

				<div className="desktopLinks">
					<a href="#">Collections</a>
					<a href="#">Men</a>
					<a href="#">Women</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</div>
			</div>

			<div className="rightBlock">
				<CartButton />
				<Avatar />
			</div>
		</NavContainer>
	)
}