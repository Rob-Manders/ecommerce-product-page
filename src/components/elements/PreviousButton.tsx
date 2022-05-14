
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import Icon_Previous from '../icons/Icon_Previous'

const PreviousButtonContainer = styled.button`
	--dimensions: 40px;

	all: unset;
	display: grid;
	place-items: center;
	width: var(--dimensions);
	height: var(--dimensions);
	background-color: ${props => props.theme.white};
	border-radius: 50%;
	cursor: pointer;

	.previousIcon {
		stroke: ${props => props.theme.veryDarkBlue};
		transform: scale(75%);
	}

	&:hover,
	&:focus {
		.previousIcon {
			stroke: ${props => props.theme.orange};
		}
	}

	@media (min-width: ${props => props.theme.breakpoint}) {
		--dimensions: 56px;

		.previousIcon {
			transform: none;
		}
	}
`

export default function PreviousButton({ action }: { action: ()=>void }) {
	const { styles } = useContext(StyleContext)

	return (
		<PreviousButtonContainer theme={styles} onClick={action}>
			<Icon_Previous />
		</PreviousButtonContainer>
	)
}