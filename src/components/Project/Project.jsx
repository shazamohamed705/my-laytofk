import { useMemo, useState, useCallback, useEffect } from 'react'
import { FaBars, FaBoxes, FaGlobe, FaBrush } from 'react-icons/fa'
import image1 from '../../assets/image 1.png'
import image2 from '../../assets/image 2.png'
import image3 from '../../assets/imag 3.png'
import rectangle23819 from '../../assets/Rectangle 23819.png'

export default function Project() {
  // التصنيفات
  const categories = useMemo(() => [
    { id: 'all', label: 'الهويه البصريه ', icon: <FaBrush className="w-4 h-4" /> },
    { id: 'apps', label: 'التطبيقات', icon: <FaBoxes className="w-4 h-4" /> },
    { id: 'social', label: 'سوشيال ميديا', icon: <FaBoxes className="w-4 h-4" /> },
    { id: 'web', label: 'الويب', icon: <FaGlobe className="w-4 h-4" /> },
    { id: 'branding', label: ' الكل ', icon: <FaBars className="w-4 h-4" /> },
  ], [])

  // بيانات المشاريع الأساسية
  const baseProjects = useMemo(() => [
    { id: 1, title: 'تطبيق سيارات', image: image1, category: 'apps', link: '/project/1' },
    { id: 2, title: 'واجهة متجر', image: image2, category: 'web', link: '/project/2' },
    { id: 3, title: 'حملة سوشيال', image: image3, category: 'social', link: '/project/3' },
    { id: 4, title: 'لوحة تحكم', image: rectangle23819, category: 'web', link: '/project/4' },
    { id: 5, title: 'دليل الهوية البصرية', image: rectangle23819, category: 'branding', link: '/project/5' },
    { id: 6, title: 'شعار وهوية', image: image1, category: 'branding', link: '/project/6' },
  ], [])

  // تكرار لإظهار شبكة كبيرة كما في التصميم مع تحسين الأداء
  const projects = useMemo(() => {
    const repeated = Array(4).fill(null).flatMap(() => baseProjects)
    return repeated.map((p, idx) => ({ 
      ...p, 
      uid: `${p.id}-${idx}`,
      // إضافة خصائص إضافية للأداء
      priority: idx < 8, // أول 8 مشاريع لها أولوية أعلى
      loading: 'lazy' // تحميل كسول للصور
    }))
  }, [baseProjects])

  const [activeFilter, setActiveFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(false)

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [projects, activeFilter])

  // تحسين تجربة المستخدم مع تأثير التحميل
  const handleFilterChange = useCallback((filterId) => {
    setIsLoading(true)
    setActiveFilter(filterId)
    // محاكاة وقت التحميل للانتقال السلس
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  const Card = useCallback(({ p }) => (
    <a
      key={p.uid}
      href={p.link}
      className="group rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-white/5 hover:scale-105 transition-all duration-300 hover:border-[#235CFD]/50 cursor-pointer block hover:shadow-2xl hover:shadow-[#235CFD]/20"
    >
      <div className="relative overflow-hidden">
        <img 
          src={p.image} 
          alt={p.title} 
          loading={p.priority ? "eager" : "lazy"}
          decoding="async" 
          className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
          style={{willChange: 'transform'}} // تحسين الأداء
        />
        {/* تأثير overlay عند الـ hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* أيقونة العرض */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-[#235CFD] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <div className="bg-black/80 p-3 sm:p-3.5 md:p-4 text-center">
        <p className="font-semibold text-sm sm:text-base text-white group-hover:text-[#235CFD] transition-colors duration-300">{p.title}</p>
      </div>
    </a>
  ), [])

  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            مشاريعنا السابقة
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-8 sm:mb-12 md:mb-16 lg:mb-20">عرض سريع لأعمالنا</p>
        </div>

        {/* شريط الفلاتر */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 animate-slide-up overflow-x-auto scrollbar-hide pb-2">
          <div className="flex bg-[#0a0f3b] rounded-full px-2 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 gap-1 backdrop-blur-sm border border-white/10 shadow-lg min-w-max">
            {[...categories].reverse().map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                disabled={isLoading}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-200 relative text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeFilter === cat.id ? 'bg-[#235CFD] text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="hidden sm:inline">{cat.icon}</span>
                {cat.label}
                {/* مؤشر التحميل */}
                {isLoading && activeFilter === cat.id && (
                  <div className="ml-2 w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 relative z-10" style={{direction:'rtl'}}>
          {isLoading ? (
            // مؤشر التحميل أثناء التصفية
            <div className="col-span-full flex items-center justify-center py-20">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-[#235CFD] rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-[#235CFD]/50 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                </div>
                <p className="text-white/60">جاري تحميل المشاريع...</p>
              </div>
            </div>
          ) : (
            filtered.slice(0, 12).map((p, index) => (
              <div 
                key={p.uid} 
                className="animate-fade-in"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <Card p={p} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}


