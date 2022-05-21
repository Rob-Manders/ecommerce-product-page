
import React, { useContext, useState, useEffect, ChangeEvent } from 'react'
import styled from 'styled-components'
import { StyleContext  } from '../../context/Style'
import Icon_Minus from '../icons/Icon_Minus'
import Icon_Plus from '../icons/Icon_Plus'

const QtySelectorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.lightGreyishBlue};
	width: 100%;
	border-radius: 10px;

	.button {
		all: unset;
		display: grid;
		place-items: center;
		padding: 1rem;
		cursor: pointer;
		
		svg {
			fill: ${props => props.theme.orange};
		}

		&:hover,
		&:focus {
			opacity: 0.5;
		}
	}

	.qty {
		font-size: 1.05rem;
		font-weight: 700;
		color: ${props => props.theme.veryDarkBlue};
		margin: 0.9rem;
	}
`

export default function QtySelector() {
	const { styles } = useContext(StyleContext)
	const [qty, setQty] = useState<number>(0)
	const [inputValue, setInputValue] = useState<string | number>(0)

	function addOne() {
		setQty(prevQty => prevQty + 1)
	}

	function subtractOne() {
		if (qty > 0) setQty(prevQty => prevQty - 1)
	}

	function changeQty(event: ChangeEvent<HTMLInputElement>) {
		if (!isNaN(parseInt(event.target.value))) {
			setQty(parseInt(event.target.value))
		} else {
			setInputValue('')
		}
	}

	useEffect(() => {
		setInputValue(qty)
		console.log(qty)
	}, [qty])

	return (
		<QtySelectorContainer theme={styles}>
			<button className="button" onClick={subtractOne}><Icon_Minus /></button>
			<input type="text" className="qty" onChange={(event) => changeQty(event)} value={inputValue} />
			<button className="button" onClick={addOne}><Icon_Plus /></button>
		</QtySelectorContainer>
	)
}