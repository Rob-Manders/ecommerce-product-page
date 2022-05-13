
import React from 'react'

export default function Icon_Menu({ action }: { action: ()=>void }) {
	return (
		<svg className='menuIcon' width="16" height="15" xmlns="http://www.w3.org/2000/svg" onClick={action}>
			<path
				d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
				fill="#69707D"
				fillRule="evenodd"
			/>
		</svg>
	)
}