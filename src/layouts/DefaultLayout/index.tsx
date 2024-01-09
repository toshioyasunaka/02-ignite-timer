import { Header } from '../../components/Header/index.tsx'
import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
