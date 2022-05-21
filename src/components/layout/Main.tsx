
import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	
	@media (min-width: ${props => props.theme.breakpointDesktop}) {
		flex-direction: row;
		margin-top: 100px;
		flex-grow: 1;
	}
`

export default function Main({ children }: { children: ReactNode }) {
	const { styles } = useContext(StyleContext)

	return (
		<MainContainer theme={styles}>
			{children}
		</MainContainer>
	)
}
