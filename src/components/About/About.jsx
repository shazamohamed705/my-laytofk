// About page - expanded full page
import LA6 from "../../assets/LA6.png";
import vectorImg from "../../assets/Vector.png";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="about" className="relative pt-20 pb-16">
        {/* Vector background pinned to the far left with no black gap */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -z-10 opacity-60"
          style={{
            width: "680px",
            height: "100%",
            backgroundImage: `url(${vectorImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-center">عن لايطوفك</h2>
          <p className="text-white/60 mb-12 text-center">نبذة صغيرة</p>
          <div className="grid lg:grid-cols-2 gap-16 items-start justify-items-end">
            <div className="relative justify-self-end lg:-mr-6">
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <img src={LA6} alt="about" className="w-full h-auto block" />
              </div>
            </div>
            <div className="lg:mt-8 justify-self-end lg:pl-0 lg:pr-6 text-right">
              <p
                className="text-right text-[#FFFFFF]"
                style={{
                  fontSize: "22px",
                  lineHeight: "38px",
                  letterSpacing: "-0.006em",
                  fontWeight: 400,
                }}
              >
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div
                  className="rounded-xl ring-1 ring-white/10 p-4 text-center"
                  style={{ background: "#F71FA633" }}
                >
                  <div className="text-2xl font-extrabold text-[#F71FA6]">+5</div>
                  <div className="text-xs mt-1 text-[#F71FA6]">سنوات الخبرة</div>
                </div>
                <div
                  className="rounded-xl ring-1 ring-white/10 p-4 text-center"
                  style={{ background: "#F6973F33" }}
                >
                  <div className="text-2xl font-extrabold text-[#F59E0B]">+20</div>
                  <div className="text-xs text-white/70 mt-1">مشروع مكتمل</div>
                </div>
                <div
                  className="rounded-xl ring-1 ring-white/10 p-4 text-center"
                  style={{ background: "#2451FF33" }}
                >
                  <div className="text-2xl font-extrabold text-[#235CFD]">+5</div>
                  <div className="text-xs mt-1 text-[#235CFD]">سنوات</div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

   

     

      

      {/* Contact CTA Section */}
     
    </div>
  );
}


