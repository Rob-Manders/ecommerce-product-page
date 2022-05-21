
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../context/Style'
import NextButton from '../elements/NextButton'
import PreviousButton from '../elements/PreviousButton'
import Thumbnail from '../elements/Thumbnail'

const ProductImageContainer = styled.section`
	position: relative;
	height: 300px;
	width: 100%;
	overflow: hidden;
	
	.image {
		background-color: ${props => props.theme.orange};
		width: 100%;
		height: 100%;
		object-fit: cover;

		@media (min-width: ${props => props.theme.breakpoint}) {
			width: 445px;
			height: 445px;
			border-radius: 15px;
		}
	}

	.buttons {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;

		@media (min-width: ${props => props.theme.breakpoint}) {
			display: none;
		}
	}

	.thumbnails {
		display: none;

		@media (min-width: ${props => props.theme.breakpoint}) {
			display: flex;
			justify-content: space-between;
			width: 445px;
			margin-top: 35px;
		}
	}

	@media (min-width: ${props => props.theme.breakpoint}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px;
		height: 100%;
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
			<div className="thumbnails">
				<Thumbnail imageUrl="./images/product-1-thumbnail.jpg" altText="thumbnail 1" selected />
				<Thumbnail imageUrl="./images/product-2-thumbnail.jpg" altText="thumbnail 2" />
				<Thumbnail imageUrl="./images/product-3-thumbnail.jpg" altText="thumbnail 3" />
				<Thumbnail imageUrl="./images/product-4-thumbnail.jpg" altText="thumbnail 4" />
			</div>
		</ProductImageContainer>
	)
}