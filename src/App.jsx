import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { ROUTES } from './routes.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        {ROUTES.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Layout>
  )
}
