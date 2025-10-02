import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'   // استدعاء الفوتر
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./components/Home/Home.jsx'))
const About = lazy(() => import('./components/About/About.jsx'))
const Project = lazy(() => import('./components/Project/Project.jsx'))
const ProjectDetail = lazy(() => import('./components/Project/Project1.jsx'))
const Blog =lazy (()=> import( './components/Blog/Bloge.jsx'))
const BlogDetail=lazy((()=> import('./components/Blog/Blog1.jsx')))
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* النافبار */}
      <Navbar />

      {/* الصفحات */}
      <main className="flex-grow">
        <Suspense fallback={<div className="pt-24 text-center">جارِ التحميل...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path='/blog'element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  )
}
