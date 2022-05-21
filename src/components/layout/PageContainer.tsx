
import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

const Container = styled.div`
	font-family: 'Kumbh Sans', sans-serif;
	color: ${props => props.theme.darkGreyishBlue};
	max-width: 1110px;
	margin: 0 auto;

	h1,
	h2 {
		color: ${props => props.theme.veryDarkBlue};
	}

	h2 {
		font-size: 2rem;
	}

	p {
		line-height: 1.6;
		font-size: 15px;
	}

	a {
		text-decoration: none;
		color: ${props => props.theme.darkGreyishBlue};
		outline: none;

		&:hover,
		&:focus {
			color: ${props => props.theme.veryDarkBlue};
		}
	}
`

export default function PageContainer({ children }: { children: ReactNode }) {
	const { styles } = useContext(StyleContext)

	return (
		<Container theme={styles}>
			{children}
		</Container>
	)
}