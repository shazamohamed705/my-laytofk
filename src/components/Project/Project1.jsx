import hero from '../../assets/image 1.png'
import shot1 from '../../assets/imag 3.png'
import shot2 from '../../assets/image 2.png'
import shot3 from '../../assets/Rectangle 23819.png'

export default function Project1() {
  // Simple, fast, and readable layout for the detailed project page
  // All text/content is RTL Arabic and images use native lazy-loading for performance
  return (
    <section className="pt-10 pb-20" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title with bordered pill like the design */}
        <div className="flex justify-center mb-8">
          <div className="px-6 py-3 rounded-md border border-white/20 shadow-[0_0_0_2px_#0a0f3b_inset] bg-[#0a0f3b]/40">
            <h1 className="text-xl sm:text-2xl font-bold">مشروع الحسيني ستوديو</h1>
          </div>
        </div>

        {/* Hero image (smaller, centered) */}
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,.45)] mb-10 bg-white/5 max-w-lg mx-auto">
          <img
            src={hero}
            alt="ELHOSENY Studio mockup"
            loading="eager"
            className="w-full h-64 object-cover block"
          />
        </div>

        {/* Description paragraphs */}
        <div className="space-y-6 text-[#E8E8E8] leading-8 text-[15px]">
          <p>
            لوريم إيبسوم هو ببساطة نص شكلي يُستخدم في صناعات المطابع ودور النشر. تم استعماله كنص افتراضي منذ القرن الخامس عشر،
            وانتشر على نحو واسع في العصر الحديث مع ظهور برامج النشر المكتبي مثل "ألدوس بيج ميكر".
          </p>
          <p>
            نقدم في هذا المشروع تصورًا بصريًا متكاملًا للشعار والهوية، مع تطبيقات عملية على واجهات العرض الرقمية والمطبوعات.
            تم التركيز على وضوح العلامة ومرونتها وسهولة استخدامها عبر مختلف الأحجام والخلفيات.
          </p>
          <p>
            استخدمنا في عملية التصميم نظام شبكي بسيط لتسريع الإنتاج وتقليل الأخطاء، مع مراعاة التباين اللوني وإمكانية القراءة.
            النتيجة تجربة انسيابية سريعة التحميل وتوافق ممتاز مع الشاشات المختلفة.
          </p>
        </div>

        {/* Gallery title */}
        <h2 className="text-center text-white/90 font-semibold mt-12 mb-6">صور من المشروع</h2>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {[shot1, shot2, shot3, shot2, shot1, shot3, shot2, shot1].map((src, i) => (
            <figure
              key={i}
              className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 group"
            >
              <img
                src={src}
                alt={`لقطة من المشروع ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-28 sm:h-32 md:h-36 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


