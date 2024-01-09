import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  )
}
