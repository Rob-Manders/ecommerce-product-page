
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { StyleContext  } from '../../context/Style'
import Icon_Minus from '../icons/Icon_Minus'
import Icon_Plus from '../icons/Icon_Plus'

const QtySelectorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${props => props.theme.lightGreyishBlue};
	width: 100%;
	border-radius: 10px;

	.button {
		all: unset;
		
		svg {
			fill: ${props => props.theme.orange};
		}
	}
`

export default function QtySelector() {
	const { styles } = useContext(StyleContext)
	const [qty, setQty] = useState<number>(0)

	return (
		<QtySelectorContainer theme={styles}>
			<button className="button"><Icon_Plus /></button>
			<p className="qty">{qty}</p>
			<button className="button"><Icon_Minus /></button>
		</QtySelectorContainer>
	)
}