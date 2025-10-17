import { App } from 'src/App'
import { createRoot } from 'react-dom/client'
import { AppProvider } from 'src/wrappers/AppProvider'

import 'unfonts.css'

const root = document.getElementById('app')!

if (location.toString().includes('sinobuh')) {
  createRoot(root).render(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/wallpaper-material.gif)',
        backgroundSize: '56px',

      }}
    />
  )
} else {
  createRoot(root).render(
    <AppProvider>
      <App />
    </AppProvider>,
  )
}

