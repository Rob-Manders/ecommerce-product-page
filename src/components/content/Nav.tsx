
import React from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import Icon_Menu from '../icons/Icon_Menu'
import Icon_Cart from '../icons/Icon_Cart'

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 68px;
	padding: 0 1.5rem;

	.leftBlock {
		display: flex;
		align-items: center;

		.menuIcon {
			margin-right: 1rem;

			@media (min-width: 800px) {
				display: none;
			}
		}

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

		.cartLink {
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
		}

		.avatar {
			--dimensions: 1.5rem;

			position: relative;
			width: var(--dimensions);
			height: var(--dimensions);
			margin-left: 1rem;
			border-radius: 50%;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}

			&:hover::before,
			&:focus::before {
				content: '';
				position: absolute;
				inset: 0;
				border-radius: 50%;
				border: 2px solid hsl(26, 100%, 55%);
			}

			@media (min-width: 800px) {
				--dimensions: 3rem;
			}
		}
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
				<Icon_Menu action={() => console.log('Open menu...')}/>
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
				<a href="#" className="cartLink"><Icon_Cart action={() => console.log('Open cart...')}/></a>
				<a href="#" className="avatar">
					<img src="./images/avatar.png" alt="image of user" width="50" height="50" />
				</a>
			</div>
		</NavContainer>
	)
}