import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  const contactHref = location.pathname === '/' ? '#contact' : '/#contact';
  return (
    <footer className="bg-black text-white">
      {/* الأعمدة + الإيميل */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-right" dir="rtl">
        
        {/* العمود الأول */}
        <div>
          <h3 className="font-bold mb-4">لربطوك</h3>
          <p className="text-gray-300 leading-relaxed">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="font-bold mb-4">روابط مهمه</h3>
          <ul className="space-y-2">
            <li><Link to="/Project" className="hover:text-gray-400"> المشاربع السابقة</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400">المدونة</Link></li>
            <li><Link to={contactHref} className="hover:text-gray-400">تواصل معنا</Link></li>
            <li><Link to="/About" className="hover:text-gray-400">عن لايطوفك </Link></li>
            <li><Link to="/" className="hover:text-gray-400">الرئيسية</Link></li>
           
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="font-bold mb-4">أشياء تهمك</h3>
          <p className="mb-2">📍 العنوان: النص مثال</p>
          <p>📞 رقم الهاتف: 0123456789</p>
        </div>

        {/* العمود الرابع (الإيميل) */}
        <div>
          <h3 className="font-bold mb-4">اشترك معنا</h3>
          <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded">
            <FaTelegramPlane />
            <input 
              type="email"
              placeholder="اكتب بريدك"
              className="bg-transparent outline-none text-white placeholder-gray-400 text-sm w-full"
            />
          </div>
        </div>
      </div>

      {/* الشريط السفلي: الحقوق + السوشيال */}
      <div className="bg-gray-950 py-6 px-6 flex flex-col md:flex-row-reverse justify-between items-center gap-4" dir="rtl">
        
        {/* أيقونات السوشيال */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube size={20} /></a>
        </div>

        {/* الحقوق */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          جميع الحقوق محفوظة © 2024 لدي مصطفى الحسيني
        </div>
      </div>
    </footer>
  );
}
