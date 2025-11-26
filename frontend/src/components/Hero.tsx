// Hero.tsx - ส่วนหัวของหน้า Home (ข้อความ + ภาพ mockup หนังสือ)
const Hero: React.FC = () => {
  return (
    <section className="grid gap-4 rounded-2xl bg-gradient-to-br from-accent via-primary to-slate-950 p-6 text-white shadow-soft md:grid-cols-[3fr,2fr]">
      {/* ด้านซ้าย: ข้อความ */}
      <div className="relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
          <span>📚</span>
          <span>อ่านหนังสือออนไลน์ได้ทุกที่ ทุกเวลา</span>
        </div>
        <h1 className="text-2xl font-bold leading-snug md:text-3xl">
          E-Library สำหรับนักศึกษา DPU
        </h1>
        <p className="max-w-md text-xs md:text-sm text-slate-100/90">
          รวมหนังสือเรียน เอกสารประกอบการสอน และหนังสืออ่านเล่น
          ในที่เดียว เข้าถึงง่ายบนทุกอุปกรณ์
        </p>

        <div className="flex gap-6 text-xs md:text-sm">
          <div>
            <div className="text-lg font-bold">+1,500</div>
            <div>เล่มในคลัง</div>
          </div>
          <div>
            <div className="text-lg font-bold">24/7</div>
            <div>เปิดให้บริการ</div>
          </div>
          <div>
            <div className="text-lg font-bold">ทุกคณะ</div>
            <div>เข้าถึงได้</div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-900 shadow-md hover:shadow-lg">
            เริ่มอ่านทันที <span>➡</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-900/80">
            ดูหนังสือมาใหม่
          </button>
        </div>
      </div>

      {/* ด้านขวา: mockup หนังสือ */}
      <div className="relative">
        <div className="h-40 w-full rounded-3xl bg-gradient-to-br from-yellow-100 via-rose-100 to-indigo-100 shadow-2xl md:h-full">
          <div className="absolute inset-x-6 bottom-4 flex gap-3">
            <div className="h-24 flex-1 rotate-[-4deg] rounded-xl bg-gradient-to-br from-cyan-700 to-sky-300" />
            <div className="h-28 flex-1 -translate-y-2 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500" />
            <div className="h-24 flex-1 rotate-3 rounded-xl bg-gradient-to-br from-emerald-600 to-lime-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
