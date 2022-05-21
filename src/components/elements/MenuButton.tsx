
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import Icon_Menu from '../icons/Icon_Menu'

const MenuButtonContainer = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	height: 100%;
	margin-right: 1rem;
	cursor: pointer;

	.menuIcon {
		fill: #69707D;
	}

	&:hover,
	&:focus {
		.menuIcon {
			fill: #1D2026;
		}
	}

	@media (min-width: ${props => props.theme.breakpointDesktop}) {
		display: none;
	}
`

export default function MenuButton() {
	const { styles } = useContext(StyleContext)

	return (
		<MenuButtonContainer theme={styles} onClick={() => console.log('Open menu...')}>
			<Icon_Menu />
		</MenuButtonContainer>
	)
}