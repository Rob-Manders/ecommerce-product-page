
import React from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import Icon_Menu from '../icons/Icon_Menu'
import Icon_Cart from '../icons/Icon_Cart'

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;

	.leftBlock {
		.menuIcon {
			margin-right: 1rem;
		}
	
		.desktopLinks {
			display: none;
		}
	}

	.rightBlock {
		.avatar {
			--dimensions: 1.5rem;
			width: var(--dimensions);
			height: var(--dimensions);
			margin-left: 1rem;
		}
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
				<Icon_Cart action={() => console.log('Open cart...')}/>
				<img className="avatar" src="./images/avatar.png" alt="image of user" width="50" height="50" />
			</div>
		</NavContainer>
	)
}