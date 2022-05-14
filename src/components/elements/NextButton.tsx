
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import Icon_Next from '../icons/Icon_Next'

const NextButtonContainer = styled.button`
	--dimensions: 40px;

	all: unset;
	display: grid;
	place-items: center;
	width: var(--dimensions);
	height: var(--dimensions);
	background-color: ${props => props.theme.white};
	border-radius: 50%;
	cursor: pointer;

	.nextIcon {
		stroke: ${props => props.theme.veryDarkBlue};
		transform: scale(75%);
	}

	&:hover,
	&:focus {
		.nextIcon {
			stroke: ${props => props.theme.orange};
		}
	}

	@media (min-width: ${props => props.theme.breakpoint}) {
		--dimensions: 56px;

		.nextIcon {
			transform: none;
		}
	}
`

export default function NextButton({ action }: { action: ()=>void }) {
	const { styles } = useContext(StyleContext)

	return (
		<NextButtonContainer theme={styles} onClick={action}>
			<Icon_Next />
		</NextButtonContainer>
	)
}
