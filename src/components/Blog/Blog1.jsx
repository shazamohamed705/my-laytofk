import { useMemo } from 'react'
import Vector1 from '../../assets/Vector1.png'

// Blog detail page with static layout matching the provided design
export default function BlogDetail() {
  // Static content prepared for RTL layout and good readability
  const hero = useMemo(() => ({
    title: 'كيفية زيادة عدد المتابعين في 30 يوم',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80',
  }), [])

  const pairImages = useMemo(() => [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
  ], [])

  const bottomGallery = useMemo(() => [
    {
      title: 'تطبيق سيارات',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop&q=80',
    },
    {
      title: 'تصميم متجر',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop&q=80',
    },
    {
      title: 'تطبيق حسابات',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80',
    },
  ], [])

  return (
    <main className="pt-[88px] min-h-dvh pb-12" dir="rtl">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-white/90 text-lg font-medium mb-6 mt-0">
          {hero.title}
        </h1>

        {/* Hero image */}
        <div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-[80px] sm:h-[100px] lg:h-[120px] object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Paragraphs */}
        <div className="mt-3 space-y-3 text-right">
          <p className="text-white/80 leading-6 text-[13px]">
            في المقال ده هنتكلم بشكل عملي وبسيط عن تفاصيل زيادة عدد المتابعين خلال مدة قصيرة،
            مع الحفاظ على جودة التفاعل. التركيز هيكون على بناء قيمة حقيقية للمحتوى وتكرار
            الخطوات اللي بتثبت فعاليتها بدل الجري وراء صيغ سريعة مؤقتة.
          </p>
          <p className="text-white/70 leading-6 text-[13px]">
            أول خطوة هي تحديد هوية واضحة للمحتوى: مين الجمهور؟ وإيه الرسالة؟ وبعدها نجهّز
            تقويم محتوى أسبوعي فيه تنوّع بين منشورات تعليمية، قصص، وأمثلة تطبيقية. الالتزام
            بالجودة أهم من الكمية، ومع اختبار صيغ مختلفة هنقدر نعرف إيه اللي بيحقق أفضل نتائج.
          </p>
          <p className="text-white/70 leading-6 text-[13px]">
            كمان مهم نخصص وقت للرد على التعليقات والرسائل بسرعة، ونطلب من الجمهور آراءهم
            ونشارك أعمالهم المميزة، ده بيرفع الارتباط بالعلامة ويدعم انتشار المحتوى.
          </p>
        </div>

        {/* Two images side by side with background vector */}
        <div className="relative mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-50">
            {pairImages.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                <img src={src} alt={`illustration-${i + 1}`} className="w-full h-24 sm:h-32 object-cover" loading="lazy" decoding="async" fetchPriority="low" />
              </div>
            ))}
          </div>
          
          {/* Vector1.png as background on the right side */}
          <div
            className="pointer-events-none absolute top-0 right-0 w-1/3 h-full -z-10 opacity-60"
            style={{
              backgroundImage: `url(${Vector1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right center'
            }}
          />
        </div>

        {/* More text */}
        <div className="mt-4 space-y-3 text-right">
          <p className="text-white/70 leading-6 text-[13px]">
            بالنسبة للإعلانات المدفوعة، نبدأ بميزانية صغيرة لاختبار أكثر من جمهور وإعلان، ومع
            ظهور النتائج نحسّن العناصر اللي بتعمل أفضل عائد. والأهم هو متابعة لوحة التحليلات
            أسبوعيًا وتسجيل الملاحظات.
          </p>
          <p className="text-white/70 leading-6 text-[13px]">
            لو التزمت بالخطة السابقة لمدة 30 يوم، هتشوف فرق واضح في الأرقام مع بناء جمهور
            حقيقي مستمر.
          </p>
        </div>

        {/* Previous projects */}
        <h2 className="text-center text-white/90 text-xs mt-6 mb-2">المشاريع السابقة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {bottomGallery.map((g, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-white/15 bg-white/[0.03]">
              <img src={g.image} alt={g.title} className="w-full h-20 object-cover" loading="lazy" decoding="async" fetchPriority="low" />
              <div className="p-2 text-center text-white/80 text-[10px]">{g.title}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


