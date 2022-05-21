
import React, { createContext, useState, ReactNode } from 'react'

export const StyleContext = createContext(null)

export default function Style({ children }: { children: ReactNode }) {
	const [ styles, setStyles ] = useState({
		maxPageWidth: '1110px',
		breakpointDesktop: '1100px',
		breakpointTablet: '500px',
		orange: 'hsl(26, 100%, 55%)',
		paleOrange: 'hsl(25, 100%, 94%)',
		veryDarkBlue: 'hsl(220, 13%, 13%)',
		darkGreyishBlue: 'hsl(219, 9%, 45%)',
		greyishBlue: 'hsl(220, 14%, 75%)',
		lightGreyishBlue: 'hsl(223, 64%, 98%)',
		white: 'hsl(0, 0%, 100%)',
		black: 'hsl(0, 0%, 0%)'
	})

	return (
		<StyleContext.Provider value={{ styles }}>
			{children}
		</StyleContext.Provider>
	)
}