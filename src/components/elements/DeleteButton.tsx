
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import Icon_Delete from '../icons/Icon_Delete'

const DeleteButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	.deleteIcon {
		fill: ${props => props.theme.greyishBlue};
	}

	&:hover,
	&:focus {
		.deleteIcon {
			fill: ${props => props.theme.darkGreyishBlue};
		}
	}
`

export default function DeleteButton({ action }: { action: ()=>void}) {
	const { styles } = useContext(StyleContext)

	return (
		<DeleteButtonContainer theme={styles} onClick={action}>
			<Icon_Delete />
		</DeleteButtonContainer>
	)
}