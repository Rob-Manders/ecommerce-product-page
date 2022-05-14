
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import NextButton from '../elements/NextButton'
import PreviousButton from '../elements/PreviousButton'

const ProductImageContainer = styled.section`
	position: relative;
	background-color: ${props => props.theme.orange};
	height: 300px;
	width: 100%;
	overflow: hidden;

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.buttons {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}
`

export default function ProductImage() {
	const { styles } = useContext(StyleContext)
	const [currentImage, setCurrentImage] = useState<string>('./images/product-1.jpg')

	return (
		<ProductImageContainer theme={styles}>
			<img src={currentImage} alt="image of product" className="image" />
			<div className="buttons">
				<PreviousButton action={() => console.log('Previous image...')} />
				<NextButton action={() => console.log('Next image...')} />
			</div>
		</ProductImageContainer>
	)
}