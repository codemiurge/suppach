import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'

import { router } from '@app/router'
import { store } from '@app/store'
import AppInitializer from '@app/AppInitializer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppInitializer/>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
