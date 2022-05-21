
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

const AvatarContainer = styled.button`
	--dimensions: 1.5rem;
	
	all: unset;
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

	@media (min-width: ${props => props.theme.breakpointTablet}) {
		--dimensions: 3rem;
	}
`

export default function Avatar() {
	const { styles } = useContext(StyleContext)

	return (
		<AvatarContainer theme={styles}>
			<img src="./images/avatar.png" alt="image of user" width="50" height="50" />
		</AvatarContainer>
	)
}