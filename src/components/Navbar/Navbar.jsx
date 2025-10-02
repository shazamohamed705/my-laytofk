// Navbar component: presentation only
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <header className="sticky top-0 left-0 right-0 z-[9999] bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[102px]">
        <div className="flex flex-row-reverse items-center justify-between h-full">
          <button 
            onClick={() => {
              navigate('/')
              // Scroll to top after navigation
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }, 100)
            }}
            className="select-none mr-6 hover:opacity-80 transition-opacity duration-200 cursor-pointer" 
            style={{width:181, height:102}}
          >
            <img src="/logo%20vertical%202%201.png" alt="LAYTOFK" className="w-[181px] h-[102px] object-contain" />
          </button>
            <nav className="hidden md:flex items-center text-sm text-right gap-[56px] -translate-y-1">
              {isHomePage ? (
                // Home page navigation - scroll to sections
                <>
                  <a className="hover:text-brand-400" href="#projects">المشاربع السابقه</a>
                  <a className="hover:text-brand-400" href="#services">خدمتنا</a>
                  <a className="hover:text-brand-400" href="#about">عن لايطوفك</a>
                  <a className="hover:text-brand-400" href="#hero">الرئيسية</a>
                </>
              ) : (
                // Other pages navigation - navigate to different pages
                <>
                  <button 
                    onClick={() => navigate('/Project')} 
                    className="hover:text-brand-400 transition-colors"
                  >
                    المشاريع السابقة
                  </button>
                  <button 
                    onClick={() => navigate('/blog')} 
                    className="hover:text-brand-400 transition-colors"
                  >
                    المدونة
                  </button>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="hover:text-brand-400 transition-colors"
                  >
                    عن لايطوفك
                  </button>
                  <button 
                    onClick={() => navigate('/')} 
                    className="hover:text-brand-400 transition-colors"
                  >
                    الرئيسية
                  </button>
                </>
              )}
            </nav>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/30 hover:border-white/50 transition-colors px-4 py-2 text-sm font-medium -translate-y-1 gap-2">
              <span className="text-white font-bold">EN</span>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-3 h-3 border border-white/70 rounded-sm flex items-center justify-center text-xs">文</div>
                <div className="flex items-center gap-0.5">
                  <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4L3 2M1 4L3 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  <div className="w-3 h-3 border border-white/70 rounded-full flex items-center justify-center text-xs">A</div>
                  <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none">
                    <path d="M7 4L5 2M7 4L5 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </button>
        </div>
      </div>
    </header>
  )
}
 
 
