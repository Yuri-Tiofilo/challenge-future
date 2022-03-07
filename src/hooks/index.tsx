import React from 'react'
import { SplashProvider } from './useSplash'

const AppProvider: React.FC = ({ children }) => (
  <SplashProvider>
    {children}
  </SplashProvider>
)
export default AppProvider
