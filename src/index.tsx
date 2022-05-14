
import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import Style from './context/Style'

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
	<Style>
		<App />
	</Style>
)