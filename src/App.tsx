import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Activities from './pages/Activities'
import Layout from './components/Layout'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const title = { '/experience': 'Experience', '/project': 'Projects', '/resume': 'Resume', '/activities': 'Activities' }[pathname]
    document.title = title ? `${title} — Eddy Hu` : 'Eddy Hu'
  }, [pathname])

  return (
    <Layout key={pathname}>
      <Routes>
        <Route path='/' element={<Navigate to='/experience' replace />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/awards' element={<Navigate to='/activities' replace />} />
        <Route path='*' element={<Navigate to='/experience' replace />} />
      </Routes>
    </Layout>
  )
}
