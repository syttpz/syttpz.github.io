import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Layout from './components/Layout'

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <Layout dark={dark} onToggleDark={() => setDark(d => !d)}>
      <Routes>
        <Route path='/' element={<Navigate to='/experience' replace />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Layout>
  )
}
