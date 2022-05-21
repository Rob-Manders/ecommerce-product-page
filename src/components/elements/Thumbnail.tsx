
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'

interface thumbnail {
	imageUrl: string
	altText: string
	selected?: boolean
	action: ()=>void
}

const ThumbnailContainer = styled.button`
	all: unset;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	position: relative;

	.thumbnailImage {
		display: block;
	}

	&.selected {
		.thumbnailImage {
			opacity: 0.25;
		}

		.border {
			display: block;
			border: 2px solid ${props => props.theme.orange};
		}
	}
	
	.border {
		display: none;
		position: absolute;
		inset: 0;
		border-radius: 10px;
	}

	&:hover,
	&:focus {
		.border {
			display: block;
			border: 2px solid ${props => props.theme.veryDarkBlue};
		}
	}
`

export default function Thumbnail({ imageUrl, altText, selected = false, action }: thumbnail) {
	const { styles } = useContext(StyleContext)

	return (
		<ThumbnailContainer className={selected && 'selected'} theme={styles} onClick={action}>
			<img className="thumbnailImage" src={imageUrl} alt={altText} width="88" height="88" />
			<div className="border"></div>
		</ThumbnailContainer>
	)
}