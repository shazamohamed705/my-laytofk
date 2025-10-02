import { memo } from 'react'
import { Link } from 'react-router-dom'

// Blog card component (memoized to avoid unnecessary re-renders)
const BlogCard = memo(function BlogCard({ post, to }) {
  return (
    <Link to={to} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#235CFD] rounded-2xl">
      <article
        className="group rounded-2xl overflow-hidden border border-white/15 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
      >
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-right">
          <h3 className="text-white font-semibold text-base leading-6 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/60 text-xs mt-2 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-3 text-[11px] text-white/50">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#235CFD]"></span>
              {post.category}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
})

export default function Blog() {
  return (
    <main className="pt-[104px] min-h-dvh pb-24" dir="rtl">
      {/* العنوان في قسم منفصل */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold" style={{marginTop: '-60px'}}>المدونة</h1>
          </header>
      </section>

      {/* الكروت في قسم منفصل */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <BlogCard to="/blog/choose-marketing-agency" post={{
            title: 'إزاي تختار شركة التسويق الصح؟',
            excerpt: 'نص مختصر يوضح الفائدة من قراءة المقال وكيف يساعد القارئ على اتخاذ قرار صحيح.',
            image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=800&auto=format&fit=crop',
            date: 'مارس 2023',
            category: 'استراتيجيات',
          }} />

          <BlogCard to="/blog/instagram-growth-2025" post={{
            title: 'أفضل طرق تحسين الظهور في إنستغرام 2025',
            excerpt: 'دليل عملي لزيادة التفاعل والانتشار من خلال أفكار محتوى وأدوات متابعة.',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop',
            date: 'فبراير 2025',
            category: 'سوشيال ميديا',
          }} />

          <BlogCard to="/blog/brand-identity-essentials" post={{
            title: 'عناصر الهوية البصرية اللي مش لازم تفوّتها',
            excerpt: 'نستعرض أساسيات تكوين هوية قوية متسقة تعزّز الانطباع وتدعم الوعي بالعلامة.',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop',
            date: 'يناير 2024',
            category: 'هوية بصرية',
          }} />

          <BlogCard to="/blog/content-calendar" post={{
            title: 'تقويم محتوى عملي لإدارة السوشيال',
            excerpt: 'كيفية إعداد تقويم محتوى شهري بسيط يساعدك على الاستمرارية.',
            image: 'https://images.unsplash.com/photo-1501556466850-7c9fa1b4aaf8?w=800&auto=format&fit=crop',
            date: 'يونيو 2024',
            category: 'سوشيال ميديا',
          }} />

          <BlogCard to="/blog/seo-quick-wins" post={{
            title: 'تحسينات SEO سريعة للمواقع الصغيرة',
            excerpt: 'خطوات بسيطة لرفع الظهور العضوي بدون تعقيد أو تكلفة كبيرة.',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop',
            date: 'أكتوبر 2023',
            category: 'SEO',
          }} />

          <BlogCard to="/blog/ads-budgets" post={{
            title: 'إدارة ميزانيات الإعلانات باحتراف',
            excerpt: 'أفضل ممارسات توزيع الميزانية بين المنصات وقياس العائد.',
            image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop',
            date: 'أغسطس 2024',
            category: 'إعلانات',
          }} />

          <BlogCard to="/blog/customer-journey" post={{
            title: 'رحلة العميل: من الوعي للشراء',
            excerpt: 'افهم مراحل الرحلة وكيف تخصص الرسائل التسويقية لكل مرحلة.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
            date: 'أبريل 2024',
            category: 'استراتيجيات',
          }} />

          <BlogCard to="/blog/email-automation" post={{
            title: 'أتمتة البريد الإلكتروني للمبتدئين',
            excerpt: 'سلاسل رسائل بسيطة تعظّم التفاعل والتحويلات تلقائيًا.',
            image: 'https://images.unsplash.com/photo-1529287870-6c5f1a9c6b9c?w=800&auto=format&fit=crop',
            date: 'ديسمبر 2023',
            category: 'CRM',
          }} />

          <BlogCard to="/blog/landing-pages" post={{
            title: 'صفحات هبوط تحوّل فعلاً',
            excerpt: 'عناصر أساسية في أي صفحة هبوط لرفع نسبة التحويل.',
            image: 'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=800&auto=format&fit=crop',
            date: 'مايو 2024',
            category: 'ويب',
          }} />

          <BlogCard to="/blog/tiktok-ads" post={{
            title: 'البدء في إعلانات تيك توك',
            excerpt: 'كيف تنشئ حملتك الأولى وتختار الجمهور وتقرأ النتائج.',
            image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop',
            date: 'يناير 2025',
            category: 'إعلانات',
          }} />

          <BlogCard to="/blog/brand-tone" post={{
            title: 'صوت العلامة ونبرة المحتوى',
            excerpt: 'بناء شخصية متسقة للمحتوى لتعزيز الثقة والتميّز.',
            image: 'https://images.unsplash.com/photo-1520975682031-6c0b5a4a7438?w=800&auto=format&fit=crop',
            date: 'سبتمبر 2024',
            category: 'هوية بصرية',
          }} />

          <BlogCard to="/blog/analytics-basics" post={{
            title: 'أساسيات التحليلات لأي مشروع',
            excerpt: 'المؤشرات التي يجب مراقبتها وكيف تفسّرها لاتخاذ قرارات.',
            image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&auto=format&fit=crop',
            date: 'نوفمبر 2024',
            category: 'تحليلات',
          }} />

         
        </div>
      </section>
    </main>
  )
}
