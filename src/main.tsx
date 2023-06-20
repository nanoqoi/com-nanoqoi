import { App } from 'src/App'
import { createRoot } from 'react-dom/client'
import { AppProvider } from 'src/wrappers/AppProvider'

import 'unfonts.css'

const root = document.getElementById('app')!
createRoot(root).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
